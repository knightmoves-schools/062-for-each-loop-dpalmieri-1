
function markAsDone(todos){
    let newTodos = ['first','second','third'];

    todos.forEach(todos) => {
        newTodos.push('done - ' + todos);
    };
    return todos;
}

document.getElementById('result').innerHTML = markAsDone();