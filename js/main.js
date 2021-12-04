import TodoItem from "./todoitem";
import TodoList from "./todolist";


const toDoList = new TodoList();

// Launch App
document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // Add Listeners

    // Procedural
    // Load List from localstorage
    // refresh the page
    refreshThePage()
}

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    // clearItemEntryField();
    // setFocusOnItemEntry();
}

const clearListDisplay = () => {
    const parentElement = document.getElementById('listItems')
    deleteContents(parentElement);
}

const deleteContents = (element) => {
    let child = element.lastElementChild
    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    } 
}

const renderList = () => {
    const list = toDoList.getList();
    list.forEach(item => {
        buildListItem(item)
    })
}

const buildListItem = (item) => {

}