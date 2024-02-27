document.addEventListener("DOMContentLoaded", (e) => {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add_button");

  const handleCheckBox = (e) => {
    debugger;
    const checked = e.target.checked;
    const parent = e.target.parentElement;
    const labelValue = parent.querySelector("label").innerHTML;
    if (checked) {
      const listOfcompletedTasks = document.getElementById("completed-tasks");
      listOfcompletedTasks.innerHTML =
        `<li>
    <input type="checkbox" checked/><label>${labelValue}</label
    ><input type="text" /><button class="edit">Edit</button
    ><button class="delete">Delete</button>
  </li>` + listOfcompletedTasks.innerHTML;
    }

    parent.remove();
  };

  const addTask = (e) => {
    const newTaks = taskInput.value;
    const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = newTaks;
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);

    listOfIncompleteTasks.prepend(li);

    listOfIncompleteTasks
      .querySelectorAll("li input[type='checkbox']")[0]
      .addEventListener("change", handleCheckBox);

    taskInput.value = ""; // empty out the add input
  };

  addButton.addEventListener("click", addTask);

  debugger;

  document
    .querySelectorAll("#incomplete-tasks input[type='checkbox']")
    .forEach((checkBox) => {
      checkBox.addEventListener("change", handleCheckBox);
    });
});
