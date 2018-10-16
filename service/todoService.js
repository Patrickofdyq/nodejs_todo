let Todo = require("../model/todo");

//  post  http://localhost/todo/
// {content:今天去烫头}
async function addTodo(todo) {

    let result = await Todo.create(todo);

    return result;
}

//  delete  http://localhost/todo/001
async function deleteTodo(id) {


    let result = await Todo.deleteOne({_id:id});

    return result;
}


//  put  http://localhost/todo/001
// {content:今天去烫头}
async function updateTodo(id,todo) {


    let result = await Todo.updateOne({_id:id},todo)

    return result;
}


//  put  http://localhost/todo/001
// {content:今天去烫头}
async function findAll() {


    let result = await Todo.find()

    return result;
}