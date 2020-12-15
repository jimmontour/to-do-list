import createToDo from "./createToDo";
import loadPage from "./loadPage";
import updateToDoList from "./upDateToDoList";

const toDoForm = () => {
    const addToDoBtn = document.querySelector('.add-to-do');
    addToDoBtn.remove()
    
    const content = document.querySelector('.content');
    const toDoForm = document.createElement('div');
    toDoForm.classList.add('to-do-form');
    content.appendChild(toDoForm);
 
    const inputTitle = document.createElement('input');
    inputTitle.classList.add('to-do-input-title');
    toDoForm.appendChild(inputTitle);

    const inputSecondary = document.createElement('div');
    inputSecondary.classList.add('to-do-input-secondary');
    toDoForm.appendChild(inputSecondary);

    const inputDate = document.createElement('input');
    inputDate.setAttribute('placeholder', 'Due Date ')
    inputDate.classList.add('to-do-input-date');
    inputDate.setAttribute('type', 'date')
    inputSecondary.appendChild(inputDate);

    const inputProject = document.createElement('input');
    inputProject.setAttribute('placeholder','Project')
    inputProject.classList.add('to-do-input-project');
    inputProject.innerText = "Project"
    inputSecondary.appendChild(inputProject);

    const bottomBtnContainer = document.createElement('div');
    bottomBtnContainer.classList.add('bottom-btn-container')
    toDoForm.appendChild(bottomBtnContainer)

    const createToDoBtn = document.createElement('div');
    createToDoBtn.classList.add('bottom-create-btn')
    createToDoBtn.innerText = 'Create To-Do';
    bottomBtnContainer.appendChild(createToDoBtn);

    const cancelToDoBtn = document.createElement('div');
    cancelToDoBtn.classList.add('cancel-btn')
    cancelToDoBtn.innerText = "Cancel";
    bottomBtnContainer.appendChild(cancelToDoBtn);

    // Event delegation
    toDoForm.addEventListener('click', e => {
        if (e.target.className === 'cancel-btn') {
            toDoForm.remove();
            loadPage();
        } else if (e.target.className === 'bottom-create-btn') {
            const newTitle = document.querySelector('.to-do-input-title').value;
            const newDueDate = document.querySelector('.to-do-input-date').value;
            const newProject = document.querySelector('.to-do-input-project').value;
            createToDo(newTitle, newDueDate, newProject);
            toDoForm.remove();
            updateToDoList()
            loadPage();
        }
    })
}

export default toDoForm