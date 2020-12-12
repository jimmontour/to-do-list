import loadPage from './modules/loadPage';
import createToDoForm from './modules/createToDoForm';

const toDoList = [];

const init = () => {
    loadPage();
    createToDoForm();
}

init();


console.log('working')