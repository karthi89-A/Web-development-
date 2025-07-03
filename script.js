function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task on click
  li.onclick = function () {
    this.remove();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
