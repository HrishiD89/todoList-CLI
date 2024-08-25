const chalk = require("chalk");
const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

const data = fs.readFileSync("todo.json", "utf-8");
const todos = JSON.parse(data);

const addTodo = (task) => {
  const newTodo = {
    id: todos.length + 1,
    task,
    status: "pending",
    date: new Date().toISOString().slice(0, 10),
  };
  todos.push(newTodo);
  fs.writeFileSync("todo.json", JSON.stringify(todos, null, 2));
  console.log(chalk.green("✅Todo added successfully"));
};


const removeTodo = (taskID) => {
    const indexToRemove = todos.findIndex((task) => task.id.toString().toLowerCase() === taskID.toString().toLowerCase());
  if (indexToRemove !== -1) {
    todos.splice(indexToRemove, 1);
    console.log(chalk.green("✅Todo deleted successfully"));
    fs.writeFileSync("todo.json", JSON.stringify(todos, null, 2));
  } else {
    console.log(chalk.red("❌  Task not found"));
  }
};


const markTodo = (taskID, status) => {
  const statusIndex = todos.findIndex((todo) => todo.id.toString().toLowerCase() === taskID.toString().toLowerCase());
  if (statusIndex === -1) return console.log(chalk.red("❌  Task not found"));
  if (status.toLowerCase() === "completed" || status.toLowerCase() === "done") {
    todos[statusIndex].status = "completed";
  } else {
    todos[statusIndex].status = "pending";
  }
  console.log(chalk.green("✅ Todo status updated successfully"));
  fs.writeFileSync("todo.json", JSON.stringify(todos, null, 2));
};

const todoList = () => {
  console.log(chalk.blue("-------------------Todo List-------------------"));
  if (todos.length === 0) {
    console.log(chalk.red.bold("Todo list is empty"));
  } else {
    todos.forEach((todo) => {
      const statusColor =
        todo.status === "completed" ? chalk.green : chalk.yellow;
      console.log(
        `${statusColor.bold(todo.id)} - ${statusColor.bold(todo.task)} - ${statusColor.bold(todo.status)} - ${chalk.cyan(
          todo.date
        )}`
      );
    });
  }
  console.log(chalk.blue("-----------------------------------------------"));
};

program.name("todo-cli").version("1.0.0").description("A simple todo list CLI");

program
  .command("list")
  .description("list all tasks")
  .action(() => {
    todoList();
  });

program
  .command("add <task>")
  .description("Add a new task")
  .action((task) => {
    addTodo(task);
  });

program
  .command("remove <taskID>")
  .description("Remove a task")
  .action((taskID) => {
    removeTodo(taskID);
  });

program
  .command("mark <taskID> <status>")
  .description("Mark a task as completed or pending")
  .action((taskID, status) => {
    markTodo(taskID, status);
  });

program.parse();
