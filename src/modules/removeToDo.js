import loadPage from './loadPage';
import toDoList from './toDoList';
import updateToDoList from './updateToDoList'

const removeToDo = () => {
    const content = document.querySelector('.content');
    content.addEventListener('click', e => {
        if (e.target.className === 'check-box') {
            const toDoName = e.target.parentElement.innerText.toString();
            console.log(toDoList) 
            toDoList.forEach(toDo => {
                if (toDo.title === toDoName) {
                    toDoList.splice(toDoList.indexOf(toDo),1)
                    updateToDoList();
                    loadPage()
                } 
            })
        }
    })
}

export default removeToDo