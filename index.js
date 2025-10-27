let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    if(todos.length > i){
        todos.foreach(todos1 => 'done - ' + todos[i]);
        i++
    }
    return todos;
}

document.getElementById('result').innerHTML = todos;