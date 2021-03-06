# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}***_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

#### To see my live website go to {GH_PAGES_LINK_HERE}!

## User Story

* _As a user I want to be able to..._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VSCode_

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Open the project folder.
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone {PUT_REPO_HERE}`
2. Navigate into the `{NAME_OF_DIRECTORY}` directory, and open in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser


## Known Bugs

_No known bugs_

## Contact Information

_For any questions or comments, please reach out through GitHub._

## License

[MIT License](license)

Copyright (c) [year] [names]

## Tests

Describe: ToDoList()

Test: It instantiates a new "to do list" object.

Code:
    let toDoList = new ToDoList;
    console.log(toDoList);

Expected Output:
    ToDoList { tasks: {}, currentId: 0 }

Describe: ToDoList.prototype.addTask()

Test: It adds a new "task" object to the "to do list" object.

Code:
    let toDoList = new ToDoList;
    let task1 = new Task("Pay rent", "Bills");
    toDoList.addTask(task1);
    console.log(toDoList);

Expected Output:
    ToDoList {
      tasks: {
        '1': Task {
          task: 'Pay rent',
          category: 'Bills',
          completed: false,
          id: 1
        }
      },
      currentId: 1
    }

Describe: ToDoList.prototype.assignId()

Test: It assigns an integer ID to each Task object in a ToDoList object.

Code:
    let toDoList = new ToDoList;
    let task1 = new Task("Pay rent", "Bills");
    toDoList.addTask(task1);
    console.log(task1.id);

Expected Output:
    1



Describe: ToDoList.prototype.deleteTask()



Describe: ToDoList.prototype.toggleTaskComplete()

Test: "It will assign completed for a ToDoList object true if it is currently assigned false, and false if it is currently assigned true."
Code:
    let toDoList = new ToDoList;
    let task1 = new Task("Pay rent", "Bills");
    toDoList.toggleTaskCompleted(task1.id);
    task1.completed;
Expected Output: true

Describe: Task()

