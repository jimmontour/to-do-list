import toDoList from "./toDoList";

const createToDo = (title, dueDate, project) => {
    toDoList.push({title, dueDate, project}); 
}

export default createToDo;