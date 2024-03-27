
const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

 
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  
  listItem.innerText = taskInput.value;

    checkbox.addEventListener('change', function () {
    if (this.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  
  listItem.appendChild(checkbox);

  
  taskList.appendChild(listItem);

  
  taskInput.value = '';
};
