const taskList = document.getElementById('tasks')

// console.log(taskList)

const addTask = () => {
    const userInput = document.getElementById('userinput')
    let checkBox = document.createElement('input'); //checkbox
    checkBox.type = 'checkbox';
    checkBox.classList.add('unchecked')
    // console.log('User input is: ' + userInput.value)
    let task = document.createElement('li')
    task.appendChild(checkBox)
    task.appendChild(document.createTextNode(userInput.value))
    taskList.appendChild(task)
    document.getElementById('userinput').value = ''
}

// Toggle checkbox
/* 

let checkBoxes = document.querySelectorAll('.unchecked').checked = false;

let listItem = document.querySelector('input.unchecked')
console.log() 

*/