const addProduct = () => {
  
    
    const input = document.querySelector('input[type="text"]');
    const task = input.value;
  
    
    if (task !== "") {
      
      const li = document.createElement("li");
  
      
      li.innerHTML = `<input type="checkbox" class="task-checkbox"> ${task}`;
  
      
      const ul = document.querySelector("ul");
      ul.appendChild(li);
  
      
      input.value = "";
    }
  };
  

