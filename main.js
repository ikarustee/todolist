const taskList = document.getElementById('tasks')

// Add task item
const addTask = () => {
    const userInput = document.getElementById('userinput')
    let task = userInput.value
    let text = document.createTextNode(task)

    if(task == '') {
        message = 'Enter your task'
        alert(message)
        return false
    } else {
        li = document.createElement('li')
        let checkBox = document.createElement('input'); //checkbox
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id', 'check')

        let label = document.createElement('label')

        taskList.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(text)
        li.appendChild(label)
        taskList.insertBefore(li, taskList.childNodes[0])
        document.getElementById('userinput').value = ''
    }
}

// Check if a task is done 
const checkDone = () => {
    let marked = document.querySelectorAll('input').checked
    for (let i = 0; i < marked.length; i++) {
        if (marked == 'checkbox') {
            console.log('Task completed')
        }
    }
}

// Remove task item
const deleteTask = () => {
    console.log('Clicked delete-button')
    li = taskList.children
    for(let i = 0; i < li.length; i++) {
    while(li[i] && li[i].children[0].checked) {
        taskList.removeChild(li[i])
        }
    }
}
    

/*  
    // First version – not suitable for deleting function
    checkBox.classList.add('unchecked')
    // console.log('User input is: ' + userInput.value)
    //let task = document.createElement('li')
    task.appendChild(checkBox)
    task.appendChild(document.createTextNode(task))
    taskList.appendChild(task) 
}
*/
// Toggle checkbox
/* 

/* let checkBoxes = document.querySelectorAll('.unchecked').checked = false;

let listItem = document.querySelector('input.unchecked')
console.log()  */