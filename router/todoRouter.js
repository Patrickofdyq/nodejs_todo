let router = require("express").Router();
let todoService = require("../service/todoService");

/**
 * 添加数据
 * @param todo : 要添加的数据,格式为 {content:今天去烫头}
 * url :   post  http://localhost/todo/
 */
router.post("/", async (request, response) => {
    // 获取请求体的数据
    let body = request.body;

    let result = await todoService.addTodo(body);

    // 写出成功的响应
    response.success(result);

})
/**
 * 根据ID删除数据
 * @param id : 要删除的数据的ID
 * url :  delete  http://localhost/todo/001
 */
// id的前面一定要加冒号!!!!!
router.delete("/:id", async (request, response) => {
    // 获取路径中的参数
    let id = request.params.id;

    await todoService.deleteTodo(id);

    // 写出成功的响应
    response.success();

})

/**
 * 更新数据
 * @param id : 要更新的数据的ID,参数在路径中
 * @param todo : 更新后的数据,格式为{content:今天去烫头},参数在请求体中
 * url :   put  http://localhost/todo/001

 */
router.put("/:id", async (request, response) => {

    let id = request.params.id;
    let body = request.body;

    await todoService.updateTodo(id, body);
    // 写出成功的响应
    response.success();

})

// 查询所有数据
// url :  get  http://localhost/todo
router.get("/", async (request, response) => {

    let result = await todoService.findAll();

    // 写出成功的响应
    response.success(result);

})

module.exports = router;