const createToDoForm = () => {
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

    const inputDate = document.createElement('div');
    inputDate.classList.add('to-do-input-date');
    inputDate.innerText = "Due Date"
    inputSecondary.appendChild(inputDate);

    const inputProject = document.createElement('div');
    inputProject.classList.add('to-do-input-project');
    inputProject.innerText = "Project"
    inputSecondary.appendChild(inputProject);
}

export default createToDoForm;