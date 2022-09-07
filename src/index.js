/**
 *
 */

/**
 * todo를 생성할 때 사용되는 todo 데이터 입니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @typedef {Object} TodoData
 * @property {boolean} [complete=false] 할 일의 완료 여부를 전달합니다.defaul값은 false 입니다.
 * @property {string} content 해야할 일의 내용을 나타냅니다.require 값입니다.
 * @property {string} [category=미분류] 어떤 카테고리에 속하는지를 나타냅니다.default값은 "미분류" 입니다
 * @property {Set<string>} [tags] optional - 해야할일의 태그들을 나타냅니다.optional 값 입니다.
 */
/**
 * todo - 할 일 객체입니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @constructor
 * @param {string} id 해야할 일의 id를 전달합니다.require값입니다.
 * @param {TodoData} todoData {@link TodoData}를 전달합니다. require값입니다.
 */
function Todo(id, todoData) {}
/**
 * 할 일 리스트를 관리하는 객체 입니다. CRUD를 지원합니다.
 * @constructor
 * @author 박세준 <tpwns6693@gmail.com>
 * 
 */
function TodoList() {}
/**
 * 할일 들이 담긴 Map 객체 입니다. <id, Todo> 쌍으로 이루어 집니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @member {Map<string,Todo>}  
 */
TodoList.prototype.todoList =  new Map();
/**
 * CREATE:
 * 할 일을 추가합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 사용될 id
 * @param {TodoData} todoData 사용될 todo데이터 
 * @return {void}
 */
TodoList.prototype.addTodo = function (id, todoData) {};
/**
 * READ:
 * 모든 할일을 조회합니다.
 * @return {Todo[]} todos
 */
TodoList.prototype.findTodoAll = function () {};
/**
 * READ:
 * ID로 특정 할일 리스트를 조회 합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 조회할 todo의 id
 * @return {Todo} todo
 */
TodoList.prototype.findTodoById = function () {};
/**
 * UPDATE:
 * ID로 특정 할 일을 수정합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 수정할 todo의 id
 * @param {TodoData} todoData 
 * @return {void}
 */
TodoList.prototype.updateTodo = function (id,todoData) {};
/**
 * UPDATE:
 * ID로 특정 할일의 특정 태그를 수정합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 수정할 todo의 id
 * @param {string} beforeTag 수정될 태그의 내용
 * @param {string} afterTag  태그의 새로운 내용
 * @return {void}
 */
TodoList.prototype.updateTodoTagById = function (id,beforeTag, afterTag) {};

/**
 * DELETE
 * 모든 할 일을 제거합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 */
TodoList.prototype.deleteTodoAll = function () {};
/**
 * DELETE:
 * ID로 특정 할 일을 제거합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 삭제할 todo의 id
 * @return {void}
 */
TodoList.prototype.deleteTodoById = function (id) {};
/**
 * DELETE:
 * ID로 특정 할 일의 특정 태그를 제거합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 타겟할 todo의 id
 * @param {string[]} targetTags  삭제될 todo의 태그들의 내용
 * @return {void
 */
TodoList.prototype.deleteTodoTagById = function (id,targetTags) {};
/**
 * DELELTE:
 * ID로 특정 할 일의 모든 태그를 제거합니다.
 * @author 박세준 <tpwns6693@gmail.com>
 * @param {string} id 삭제될 todo의 id
 * @return {void}
 */
TodoList.prototype.deleteTodoTagAllById = function (id) {};
