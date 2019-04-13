import './index.css'

window.onload = function() {
  const taskField = document.querySelector('#taskField');
  const addTaskBtn = document.querySelector('#addTaskBtn');
  const allTasksParent = document.querySelector('#allTasks');

  taskField.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      createNewTask(allTasksParent, event.target.value)
      console.log(this);
      // console.log(this.value);
      this.value = ''
    }
  })
}

function createNewTask(parent, task) {
  // console.log(task);
  console.log(parent);
  let col = create({'class': 'col-sm-3'})

  let singleTask = create({'class': 'single-task d-flex'})
  let singleTaskP = create('p')
  singleTaskP.innerHTML = task
  singleTask.appendChild(singleTaskP)

  let span = create('span', {'class': 'ml-auto'})
  span.innerHTML = '<i class="fas fa-times-circle"></i>'
  span.addEventListener('click', function() {
    parent.removeChild(col)
  })
  singleTask.appendChild(span)

  let taskController = createTaskController(singleTask)
  taskController.style.visibility = 'hidden'
  singleTask.appendChild(taskController)

  singleTask.onmouseenter = function() {
    taskController.style.visibility = 'visible'
    // console.log('mouse enter')
  }

  singleTask.onmouseleave = function() {
    taskController.style.visibility = 'hidden'
    // console.log('mouse leave')
  }

  col.appendChild(singleTask)
  parent.appendChild(col)
}

function createTaskController(parent) {
  let controlPannel = create({'class': 'task-control-panel d-flex align-items-center'})

  let colorPallete = createColorPallete(parent)
  controlPannel.appendChild(colorPallete)

  let editBtn = createEditBtn(parent)
  controlPannel.appendChild(editBtn)

  return controlPannel
}

function createEditBtn(parent) {
  let span = create('span', {'class': 'ml-auto mr-2'})
  span.innerHTML = '<i class="fas fa-edit"></i>'
  span.style.color = '#fff'
  span.addEventListener('click', function() {
    let p = parent.querySelector('p')
    let textArea = create('textarea', {'class': 'inner-textarea'})
    textArea.style.width = parent.offsetWidth + 'px'
    textArea.style.height = parent.offsetHeight + 'px'
    textArea.innerHTML = p.innerHTML

    textArea.addEventListener('keypress', function(event) {
      if(event.keyCode === 13) {

        event.stopPropagation()

        if(this.value) {
          p.innerHTML = this.value
          parent.removeChild(this)
        }else {
          alert('Please put some data')
        }
      }
    })

    parent.appendChild(textArea)
  })

  return span;
}

function createColorPallete(parent) {
  console.log(parent);
  const colors = ['palegreen', 'skyblue', 'powderblue', 'salmon', 'grey', 'red']

  let colorDiv = create({'class': 'd-flex'})

  colors.forEach(color => {
    let div = create({'class': 'color-circle ml-1'})
    div.style.background = color
    div.addEventListener('click', function() {
      parent.style.background = color
    })
    colorDiv.appendChild(div)
  })
  return colorDiv
}





// Create a new Element by it's tag name.
// Of you don't provide any tag name then it will be div
// You can also pass some attribute as an object optionally

window.create = function () {

  if (arguments.length === 0) {
      return document.createElement('div');
  }

  if (arguments.length === 1 && typeof arguments[0] != 'object') {
      return document.createElement(arguments[0]);
  }

  var tag = arguments[0];
  var attr = arguments[1] || arguments[0];

  if (arguments.length === 1 && typeof arguments[0] === 'object') {
      tag = 'div';
  }

  var element = document.createElement(tag);

  for (var i in attr) {
      element.setAttribute(i, attr[i]);
  }

  return element;
}
