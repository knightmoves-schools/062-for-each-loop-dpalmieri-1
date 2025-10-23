let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    todos.foreach(todos => 'done - ' + todos[i], i++);
    return todos;
}

document.getElementById('result').innerHTML = todos;