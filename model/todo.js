let mongoose = require("mongoose");

let schema = new mongoose.Schema({
    // 待办事项
    content: {
        type: String,// 类型
        required: [true, "此字段必须填写,不能为空"],// 此字段必须填写,不能为空
        unique: [true, "此字段不能重复"]// 设置字段唯一
    },
    // 事件是否完成
    isDone: {
        type: Boolean,
        default: false// 设置默认值
    },
    // 创建时间
    createTime: {
        type: Date,
        default: Date.now()//设置默认值
    }
});

module.exports = mongoose.model("todo", schema);

