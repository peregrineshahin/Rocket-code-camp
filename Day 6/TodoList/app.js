function DOMContentLoaded() {
  return new Promise((resolve, _reject) => {
    document.addEventListener("DOMContentLoaded", resolve);
  });
}

async function mainFunction() {
  await DOMContentLoaded();
  const addButton = document.getElementById("add_button");
  addButton.addEventListener("click", addTask);

  const initialIncompleted = JSON.parse(localStorage.getItem("incompleted"));
  if (initialIncompleted === null) {
    initialIncompleted = [];
  }
  initialIncompleted.forEach((taskFromLocalStorage) => {
    const emptyEvent = null;
    addTask(emptyEvent, taskFromLocalStorage);
  });

  /// handle only existing tasks
  document
    .querySelectorAll("#incomplete-tasks input[type='checkbox']")
    .forEach((checkBox) => {
      checkBox.addEventListener("change", handleIncomplete);
    });

  document
    .querySelectorAll("#completed-tasks input[type='checkbox']")
    .forEach((checkBox) => {
      checkBox.addEventListener("change", handleCompleted);
    });

  document.querySelectorAll(".delete").forEach((deleteButton) => {
    deleteButton.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      const taskName = parent.querySelector("input[type='text']").value;
      deleteTask(parent, taskName);
    });
  });

  document.querySelectorAll(".edit").forEach((editButton) => {
    editButton.addEventListener("click", handleEdit);
  });

  document.querySelectorAll(".save").forEach((saveButton) => {
    saveButton.addEventListener("click", handleSave);
  });
}

mainFunction();


function createTask(taskName) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const input = document.createElement("input");
  input.type = "text";

  input.value = taskName;
  input.readOnly = true;

  const save = document.createElement("button");
  save.className = "save hide";
  save.textContent = "Save";

  save.addEventListener("click", handleSave);

  const edit = document.createElement("button");
  edit.className = "edit";
  edit.textContent = "Edit";

  edit.addEventListener("click", handleEdit);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    const taskName = parent.querySelector("input[type='text']").value;
    deleteTask(parent, taskName);
  });

  li.appendChild(checkbox);
  li.appendChild(input);
  li.appendChild(save);
  li.appendChild(edit);
  li.appendChild(deleteButton);

  return li;
}

function createCompleted(taskName) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  const input = document.createElement("input");
  input.type = "text";
  input.value = taskName;
  input.readOnly = true;

  const save = document.createElement("button");
  save.className = "save hide";
  save.textContent = "Save";

  save.addEventListener("click", handleSave);

  const edit = document.createElement("button");
  edit.className = "edit";
  edit.textContent = "Edit";

  edit.addEventListener("click", handleEdit);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    const taskName = parent.querySelector("input[type='text']").value;
    deleteTask(parent, taskName);
  });

  li.appendChild(checkbox);
  li.appendChild(input);
  li.appendChild(save);
  li.appendChild(edit);
  li.appendChild(deleteButton);

  return li;
}

function addTask(_e, taskFromLocalStorage) {
  let taskInput;
  let taskName;
  let li;
  const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
  if (!taskFromLocalStorage) {
    taskInput = document.getElementById("new-task");
    taskName = taskInput.value;
    li = createTask(taskName);
    taskInput.value = ""; // empty out the add input
    let existingLocalItem = JSON.parse(localStorage.getItem("incompleted"));
    if (existingLocalItem === null) {
      existingLocalItem = [];
    }

    existingLocalItem.push(taskName);
    localStorage.setItem("incompleted", JSON.stringify(existingLocalItem));
  } else {
    li = createTask(taskFromLocalStorage);
  }

  listOfIncompleteTasks.prepend(li);

  listOfIncompleteTasks
    .querySelectorAll("li input[type='checkbox']")[0]
    .addEventListener("change", handleIncomplete);
}

function handleIncomplete(e) {
  const checked = e.target.checked;
  if (checked) {
    const parent = e.target.parentElement;
    const inputValue = parent.querySelector("input[type='text']").value;
    const listOfcompletedTasks = document.getElementById("completed-tasks");
    const li = createCompleted(inputValue);
    listOfcompletedTasks.prepend(li);
    const checkbox = li.querySelectorAll("li input[type='checkbox']")[0];
    checkbox.addEventListener("change", handleCompleted);

    deleteTask(parent, inputValue);
  }
}

function handleCompleted(e) {
  const checked = e.target.checked;
  if (!checked) {
    const parent = e.target.parentElement;
    const inputValue = parent.querySelector("input[type='text']").value;
    const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
    const li = createTask(inputValue);
    listOfIncompleteTasks.prepend(li);
    listOfIncompleteTasks
      .querySelectorAll("li input[type='checkbox']")[0]
      .addEventListener("change", handleIncomplete);
    deleteTask(parent, inputValue);
  }
}

function deleteTask(element, taskName) {
  debugger;
  element.remove();
  let incompleteLocalStorage = JSON.parse(localStorage.getItem("incompleted"));
  if (incompleteLocalStorage !== null) {
    incompleteLocalStorage = incompleteLocalStorage.filter(
      (task) => task !== taskName,
    );
    localStorage.setItem("incompleted", JSON.stringify(incompleteLocalStorage));
  }
}

function handleEdit(e) {
  const el = e.target;
  el.classList.add("hide");
  const parent = el.parentElement;
  const input = parent.querySelector("input[type='text']");
  input.readOnly = false;
  input.focus();
  const save = parent.querySelector(".save");
  save.classList.remove("hide");
}

function handleSave(e) {
  debugger;
  const el = e.target;
  el.classList.add("hide");
  const parent = el.parentElement;
  const input = parent.querySelector("input[type='text']");
  input.readOnly = true;
  const edit = parent.querySelector(".edit");
  edit.classList.remove("hide");
}
