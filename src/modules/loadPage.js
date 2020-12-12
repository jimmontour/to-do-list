const loadPage = () => {
    const content = document.querySelector('.content');
    const addTaskBtn = document.createElement('div');
    addTaskBtn.classList.add('add-to-do');
    addTaskBtn.textContent = "+ Add Text";
    content.appendChild(addTaskBtn);
}

export default loadPage