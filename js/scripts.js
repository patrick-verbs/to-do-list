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
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
}

ToDoList.prototype.markTaskComplete = function(id){
  this.tasks[id].completed = true;
}

// ----- list item specifics, e.g. categories like bills, groceries?
function Task(task, category) {
  this.task = task;
  this.category = category;
  this.completed = false;
}




// UI logic
///////////

// Console test
///////////////
let toDoList = new ToDoList;
let task1 = new Task("Pay rent", "Bills")
let task2 = new Task("File taxes", "Finances")
toDoList.addTask(task1);
toDoList.addTask(task2);
toDoList.markTaskComplete(1);
console.log(toDoList);