const removeToDo = () => {
    const toDo = document.querySelectorAll('to-do-div');

    toDo.forEach(addEventListener('click', e => {
        if (e.target.className === 'check-box') {
            // remove the parent to do
        }
    }))
}

export default removeToDo