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

ToDoList.prototype.toggleTaskComplete = function(id){
  if(this.tasks[id].completed){
    this.tasks[id].completed = false;
  } else {
    this.tasks[id].completed = true;
  }
}

ToDoList.prototype.findTasksInCategory = function(category){
  this.tasks.forEach(function(element){
    console.log(element);
  });
}

// ----- list item specifics, e.g. categories like bills, groceries?
function Task(task, category) {
  this.task = task;
  this.category = category;
  this.completed = false;
}

// UI logic
///////////
let toDoList = new ToDoList;
let task1 = new Task("Pay rent", "Bills")
let task2 = new Task("File taxes", "Income")
toDoList.addTask(task1);
toDoList.addTask(task2);

$(document).ready(function () {
  $("form#to-do-list").submit(function(event) {
    event.preventDefault();
    const task = new Task(
      $("input#new-task").val(),
      $("input#new-task-category").val()
    );
    console.log(task);
    toDoList.addTask(task);
    console.log(toDoList.tasks[3].task);
    console.log(toDoList.tasks[3].category);
    console.log(Object.keys(toDoList.tasks).length);
   
    $("#task-list").append(`<li><span class="task">${toDoList.tasks[3].task}</span> <span class="category">${toDoList.tasks[3].category}</span></li>`);
  });

});

// Console test
///////////////
// console.log(task1.id);

// toDoList.toggleTaskComplete(task2.id);
// console.log(task2.completed);
// toDoList.toggleTaskComplete(task2.id);
// console.log(task2.completed);
// toDoList.findTasksInCategory();