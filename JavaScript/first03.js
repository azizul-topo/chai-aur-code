const addBtn = document.getElementById('btn')
const todo_board = document.getElementById('to-do')

function draggableFun(target){
    target.addEventListener('dragstart', ()=>{
        target.classList.add('flying')
    })
    target.addEventListener('dragend', ()=>{
        target.classList.remove('flying')
    })
}


addBtn.addEventListener('click', ()=> {
    const input = prompt('Enter a task : ')
    if(!input) return;
    const task = document.createElement('p')
    task.classList.add('task')
    task.setAttribute('draggable', true);
    task.innerText = input
    draggableFun(task)
    todo_board.appendChild(task)
})


const boards = document.querySelectorAll('.board')
const alltask = document.querySelectorAll('.task')

Array.from(alltask).forEach(draggableFun)

Array.from(boards).forEach((board)=>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying')
        console.log(flyingElement)
        board.appendChild(flyingElement)
    } )
})

