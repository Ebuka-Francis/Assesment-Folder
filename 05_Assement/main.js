console.log('yooo');

const getTodos = () => {
    const todos = localStorage.getItem('todoList');
    return todos ? JSON.parse(todos) : [];
}

const todoList = getTodos();

const setTodos = (todos) => {
    localStorage.setItem('todoList', JSON.stringify(todos));
}

const addTodo = (value) => {
    if (value){
        todoList.push({id: Date.now(), value:value, isCompleted: false});
        setTodos(todoList)
    }
    document.getElementById('inputName').value = "";
    refreshDom();
}

const editedItem = (itemNumber) => {
    let editedItem = prompt('Edit Todo', todoList[itemNumber].value);

    if(editedItem) {
        todoList[itemNumber].value = editedItem;
        setTodos(todoList);
    }
    refreshDom();
}
const removeItem = (itemNumber) => {
    todoList.splice(itemNumber, 1);
    setTodos(todoList);

    refreshDom();

};


const editIsCompleted = (itemNumber) => {
    if (itemNumber > -1) {
        todoList[itemNumber].isCompleted = !todoList[itemNumber].isCompleted;
    }
    refreshDom();
}
const refreshDom = () => {
    document.getElementById("taskList").innerHTML = "";
    console.log(todoList);
    todoList.forEach((item, index) => {
        const nameList = document.getElementById("taskList");
        const newClassName = item.isCompleted ? 'isCompleted' : '';
     const list = 
     `<li> <p ${newClassName} onclick={editIsCompleted(${index})}> ${item.value}</p>
     <button onclick={removeItem(${index})}>X</button>
     </li>`;

     nameList.innerHTML += list;
    });
}
refreshDom();

document.querySelector('#myBtn').addEventListener("click", () => {
    const inputValue = document.getElementById("inputName").value;
    addTodo(inputValue);
})