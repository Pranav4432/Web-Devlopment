document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
  
    // Add task function
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.textContent = taskText;
      
      // Add click handler to remove task
      li.addEventListener('click', () => {
        li.remove();
      });
  
      taskList.appendChild(li);
      taskInput.value = '';
    }
  
    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);
  
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });