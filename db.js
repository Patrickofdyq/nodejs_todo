let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos", {useNewUrlParser: true})
let connection = mongoose.connection;

connection.on("error", err => {
    console.log("数据库连接失败:" + err.toString())
})

connection.once("open", () => {
    console.log("连接成功")
})
