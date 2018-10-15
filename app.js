// 程序的主入口,作用就类似Springboot工程的入口类

require("./db")
let express = require("express");
let app = express();

app.get("/", (request, response) => {
    response.send("hi")
})

app.listen(8000)
