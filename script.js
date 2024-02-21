document.addEventListener("DOMContentLoaded", function() {
  const newTask = document.getElementById("task");
  const submitButton = document.getElementById("submit");
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("form");

  submitButton.addEventListener("click", function(e){
    e.preventDefault();
    const taskValue = newTask.value.trim();
    if (taskValue !== "") {
      addTaskToList(taskValue);
      newTask.value = "";
      submitButton.disabled = true;
    }
  });

  newTask.addEventListener("input", function(){
    submitButton.disabled = newTask.value.trim() === "";
  });

  function addTaskToList(taskValue){
    const listItem = document.createElement("li");
    listItem.textContent = taskValue;
    taskList.appendChild(listItem);
  };

  form.addEventListener("submit", function(e){
    e.preventDefault();
    return false;
  })

  
})