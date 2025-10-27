let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    todos.foreach(todos1 => 'done - ' + todos);
    return todos;
}

document.getElementById('result').innerHTML = todos;