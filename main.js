const userInput = document.getElementById('userinput')
const addButton = document.getElementById('addtask')
const taskList = document.getElementById('tasks')

// console.log(taskList)

const addTask = () => {
    // console.log('User input is: ' + userInput.value)
    let task = document.createElement('li')
    task.appendChild(document.createTextNode(userInput.value))
    taskList.appendChild(task)
    document.getElementById('userinput').value = ''
}