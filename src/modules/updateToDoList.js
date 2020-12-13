import loadPage from "./loadPage";
import removeToDo from "./removeToDo";
import toDoList from "./toDoList";

const updateToDoList = () => {
    const content = document.querySelector('.content')
    content.innerHTML = '';

    for (let i = 0; i < toDoList.length; i++) {
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add('to-do');
        content.appendChild(toDoDiv);

        const title = document.createElement('div');
        title.classList.add('to-do-title');
        toDoDiv.appendChild(title)

        const checkBox = document.createElement('div');
        checkBox.classList.add('check-box');
        title.appendChild(checkBox);

        const text = document.createElement('span');
        text.classList.add('to-do-text');
        text.innerText = toDoList[i].title;
        title.appendChild(text);

        const details = document.createElement('div');
        details.classList.add('to-do-details');
        toDoDiv.appendChild(details);

        const dueDate = document.createElement('div');
        dueDate.classList.add('to-do-due-date');
        dueDate.innerText = toDoList[i].dueDate;
        details.appendChild(dueDate);

        const project = document.createElement('div');
        project.classList.add('to-do-project');
        project.innerText = toDoList[i].project;
        details.appendChild(project);
    }
    removeToDo();
}

export default updateToDoList