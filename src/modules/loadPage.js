import toDoForm from "./toDoForm";

const loadPage = () => {
    const content = document.querySelector('.content');
    const addTaskBtn = document.createElement('div');
    addTaskBtn.classList.add('add-to-do');
    addTaskBtn.textContent = "+ Add To Do";
    content.appendChild(addTaskBtn);

    addTaskBtn.addEventListener('click', e => {
        toDoForm();
    })
}

export default loadPage