const ID_NOT_FOUND_ERROR = (id: number) =>
  new Error(`찾는 id : ${id}, 찾는 id에 해당하는 todo가 없습니다.`);
const TAG_NOT_FOUND_ERROR = (tags: Array<string>) =>
  new Error(
    `찾는 tag : ${tags.toString()}일치하는 태그가 해당 todo에 없습니다.`
  );
// todo를 생성할 때 사용되는 todo 데이터 입니다.
type TodoData = {
  complete?: boolean; // 할 일의 완료 여부를 전달합니다.
  content: string; // 해야할 일의 내용을 나타냅니다.require 값입니다.
  category?: string; // 어떤 카테고리에 속하는지를 나타냅니다.
  tags?: Array<string>; // optional - 해야할일의 태그들을 나타냅니다.optional 값 입니다.
};
/**
 *  todo - 할 일 객체입니다.
 */
interface Todo {
  readonly todoId: number; // 해야할 일의 id를 전달합니다.require값입니다.
  complete: boolean; // 할 일의 완료 여부를 전달합니다.
  content: string; // 해야할 일의 내용을 나타냅니다.require 값입니다.
  category: string; // 어떤 카테고리에 속하는지를 나타냅니다.
  tags: Set<string>; // optional - 해야할일의 태그들을 나타냅니다.optional 값 입니다.
}

/**
 * todo를 구현한 객체 입니다.
 * @author 박세준 <tpwns6693@gmail.com>
 */
class TodoImpl implements Todo {
  todoId: number;
  complete: boolean;
  content: string;
  category: string;
  tags: Set<string>;
  constructor(
    todoId: number,
    { complete = false, content, category = "미분류", tags = [] }: TodoData
  ) {
    this.todoId = todoId;
    this.complete = complete;
    this.content = content;
    this.category = category;
    this.tags = new Set(tags);
  }
}

/**
 * 할 일 리스트를 관리하는 객체 입니다. CRUD를 지원합니다.
 * @constructor
 * @author 박세준 <tpwns6693@gmail.com>
 *
 */
class TodoList {
  private _todoList: Map<number, Todo> = new Map();
  public get todoList(): Map<number, Todo> {
    return this._todoList;
  }
  public set todoList(value: Map<number, Todo>) {
    this._todoList = value;
  }
  private _endId: number = 0;
  public get endId(): number {
    return this._endId;
  }
  public set endId(value: number) {
    this._endId = value;
  }
  /**
   * CREATE:
   * 할 일을 추가합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  addTodo(todoData: TodoData): void {
    this.endId += 1;
    const newTodo = new TodoImpl(this.endId, todoData);
    this.todoList.set(this.endId, newTodo);
  }

  /**
   * READ:
   * 모든 할일을 조회합니다.
   */
  findTodoAll(): Todo[] {
    return Array.from(this.todoList.values());
  }
  /**
   * READ:
   * ID로 특정 할일 리스트를 조회 합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  findTodoById(id: number): Todo | void {
    const targetTags = this.todoList.get(id);
    if (targetTags) return this.todoList.get(id);
    else throw ID_NOT_FOUND_ERROR(id);
  }

  /**
   * UPDATE:
   * ID로 특정 할 일을 수정합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  updateTodo(id: number, todoData: TodoData): void {
    const newTodo = new TodoImpl(id, todoData);
    this.todoList.set(id, newTodo);
  }
  /**
   * UPDATE:
   * ID로 특정 할일의 특정 태그를 수정합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  updateTodoTagById(id: number, beforeTag: string, afterTag: string): void {
    const targetTodo = this.todoList.get(id);
    if (targetTodo) {
      if (targetTodo.tags.has(beforeTag)) {
        targetTodo.tags.delete(beforeTag);
        targetTodo.tags.add(afterTag);
      } else {
        throw TAG_NOT_FOUND_ERROR([beforeTag]);
      }
    } else {
      throw ID_NOT_FOUND_ERROR(id);
    }
  }

  /**
   * DELETE
   * 모든 할 일을 제거합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  deleteTodoAll(): void {
    this.todoList.clear();
  }
  /**
   * DELETE:
   * ID로 특정 할 일을 제거합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  eleteTodoById(id: number): void {
    this.todoList.delete(id);
  }
  /**
   * DELETE:
   * ID로 특정 할 일의 특정 태그를 제거합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  deleteTodoTagById(id: number, targetTags: Array<string>): void {
    const targetTodo = this.todoList.get(id);
    const cannotFoundTags: Array<string> = [];
    if (targetTodo) {
      for (const tag in targetTags) {
        if (targetTodo.tags.has(tag)) {
          targetTodo.tags.delete(tag);
        } else {
          cannotFoundTags.push(tag);
        }
      }
      if (cannotFoundTags) throw TAG_NOT_FOUND_ERROR(cannotFoundTags);
    } else {
      throw ID_NOT_FOUND_ERROR(id);
    }
  }
  /**
   * DELELTE:
   * ID로 특정 할 일의 모든 태그를 제거합니다.
   * @author 박세준 <tpwns6693@gmail.com>
   */
  deleteTodoTagAllById(id: number): void {
    const targetTodo = this.todoList.get(id);
    if (targetTodo) targetTodo.tags.clear();
    else throw ID_NOT_FOUND_ERROR(id);
  }
}
const myTodoList = new TodoList();
console.log(myTodoList);