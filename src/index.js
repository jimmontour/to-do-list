import loadPage from './modules/loadPage';
import createToDoForm from './modules/createToDoForm';

const toDoList = [];

const init = () => {
    loadPage();
}

init();

// Event handlers

    const addToDoBtn = document.querySelector(".add-to-do");
    addToDoBtn.addEventListener('click', e => {
        createToDoForm();
        addToDoBtn.remove();
        console.log('clicked');
    })
