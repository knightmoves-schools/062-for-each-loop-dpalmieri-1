let todos = ['one', 'two', 'three'];


function markAsDone(todos){
    let newTodos = [];

    todos.forEach(todos => newTodos.push('done - ' + todos));

    return newTodos;
    };
    

document.getElementById('result').innerHTML = markAsDone();