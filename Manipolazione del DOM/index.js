const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    
    const taskItem = document.createElement("li");

      const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    
    const taskTextNode = document.createTextNode(taskText);

    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextNode);

    
    taskList.appendChild(taskItem);

    // Reset dell'input
    taskInput.value = "";
  }
};
