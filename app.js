// 程序的主入口,作用就类似Springboot工程的入口类
// 引入的位置放在第一行
require('express-async-errors');
require("./db")
let express = require("express");
let todoRouter = require("./router/todoRouter");
let app = express();

// 解析json格式的数据
app.use(express.json())
// 挂载自定义的router
app.use("/todo", todoRouter);
// 处理全局异常的中间件
app.use((err, request, response, next) => {
    response.send({
        code: -1,
        msg: "操作失败",
        data: err.toString()
    })
})

app.listen(8000)
