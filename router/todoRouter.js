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

    console.log("=====" + body);

    let result = await todoService.addTodo(body);

    response.send({
        code: 1,
        msg: "操作成功",
        data: result
    })
})
/**
 * 根据ID删除数据
 * @param id : 要删除的数据的ID
 * url :  delete  http://localhost/todo/001
 */
router.delete("/:id",async (request,response)=>{

    let id = request.params.id;
    console.log(`获取到的id:` + id);
    await todoService.deleteTodo(id);


    response.send({
        code: 1,
        msg: "操作成功"
    })
})

module.exports = router;