// 程序的主入口,作用就类似Springboot工程的入口类
// 引入的位置放在第一行
require('express-async-errors');
require("./db");
let config = require("./config");
let express = require("express");
let responseUtil = require("./utils/responseUtil");

// 处理日志
let morgan = require("morgan");
let todoRouter = require("./router/todoRouter");
let app = express();
// 使用日志功能
app.use(morgan('combined'))
// 解析json格式的数据
app.use(express.json())
// 挂载自定义的router
app.use("/todo", todoRouter);
// 处理全局异常的中间件
app.use((err, request, response, next) => {

    // 写出失败的响应
    responseUtil.fail(response, err)

})

app.listen(config.PORT)
