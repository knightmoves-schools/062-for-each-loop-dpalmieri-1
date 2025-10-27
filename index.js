let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    if(todos.length > i){
        i++
    }
    todos.foreach(todos1 => 'done - ' + todos[i]);
    return todos;
}

document.getElementById('result').innerHTML = todos;