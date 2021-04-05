// Business logic
/////////////////
// ----- list items
function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.deleteTask = function(id) {
  if this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
}

// ----- list item specifics, e.g. categories like bills, groceries?
function Task(task, category) {
  this.task = task;
  this.category = category;
}



// UI logic
///////////

// Console test
///////////////
let ToDoList = new ToDoList;
let task1 = new Task("Pay rent", "Bills")
let task2 = new Task("File taxes", "Finances")