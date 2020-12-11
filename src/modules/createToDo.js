const createToDo = (title, dueDate, priority) => {
    let completed = false;
    return {title, description, dueDate, priority, completed}
}

export default createToDo;