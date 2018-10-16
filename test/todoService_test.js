require("../db");
let todoService = require("../service/todoService");

async function testService() {
    // 测试添加
    // let todo = {content: "今天上课要打瞌睡"};
    // let result = await todoService.addTodo(todo);

    // 测试查询
    // let result = await todoService.findAll();

    // 测试更新

    // await todoService.updateTodo("5bc53a8a0106f943c8e0ca51", {content: "今天去旅游"});
    // 测试删除
    // await todoService.deleteTodo("5bc53bc43c38e643145da347");

}

testService();