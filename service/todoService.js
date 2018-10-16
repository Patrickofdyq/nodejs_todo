let Todo = require("../model/todo");

// {content:今天去烫头}
/**
 * 添加数据
 * @param todo : 要添加的数据,格式为 {content:今天去烫头}
 * url :   post  http://localhost/todo/
 * @returns {Promise<*>}
 */
async function addTodo(todo) {
    // 查询要添加的数据,是否已经存在
    // 如果已经存在了,就往外抛出一个自定义的异常

    let result = await Todo.findOne({content: todo.content});
    if (result) {
        throw Error("您要添加的数据已经存在!");
    }

    result = await Todo.create(todo);

    return result;
}

/**
 * 根据ID删除数据
 * @param id : 要删除的数据的ID
 * url :  delete  http://localhost/todo/001
 * @returns {Promise<*>}
 */
async function deleteTodo(id) {
    // 根据ID检查数据是否存在
    await isExistByID(id);

    let result = await Todo.deleteOne({_id: id});

    if (result.n !== 1) {
        throw Error(`删除ID为${id}的数据发生错误`)
    }

    return result;
}

// 查询对应ID的数据,是否存在
async function isExistByID(id) {
    // 查询对应ID的数据,是否存在的,如果不存在,直接抛异常

    let result = await Todo.findOne({_id: id});
    if (!result) {
        throw Error(`ID为${id}的数据不存在`)
    }

}

/**
 * 更新数据
 * @param id : 要更新的数据的ID
 * @param todo : 更新后的数据,格式为{content:今天去烫头}
 * url :   put  http://localhost/todo/001
 * @returns {Promise<void>}
 */
async function updateTodo(id, todo) {
    // 先检查数据是否存在
    await isExistByID(id);

    let result = await Todo.updateOne({_id: id}, todo);

    if (result.n !== 1) {
        throw Error(`更新ID为${id}的数据发生错误`)
    }

}

// 查询所有数据
// url :  get  http://localhost/todo
async function findAll() {

    let result = await Todo.find()

    return result;
}

module.exports = {
    addTodo,
    deleteTodo,
    updateTodo,
    findAll
}