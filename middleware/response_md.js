module.exports = (request, response, next) => {
    //  给response对象增加了两个方法
    response.success = (result) => {
        response.send({
            code: 1,
            msg: "操作成功",
            data: result
        })
    };

    response.fail = (err) => {
        response.send({
            code: -1,
            msg: "操作失败",
            data: err.toString()
        })
    }

    // 放行的代码
    next();
}