let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    foreach(todos => 'done - ' + todos);
    return todos;
}

document.getElementById('result').innerHTML = todos;