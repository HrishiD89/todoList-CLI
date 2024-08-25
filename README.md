# Todo CLI
================

A simple command-line interface for managing your todo list.

## Description
---------------

Todo CLI is a lightweight tool that allows you to create, manage, and mark tasks as completed. It's built using Node.js and uses a JSON file to store your todo list.

## Features
------------

* Create new tasks with the `add` command
* List all tasks with the `list` command
* Mark tasks as completed or pending with the `mark` command
* Remove tasks with the `remove` command

## Installation
---------------

To install Todo CLI, simply clone this repository and run the following command:
```bash
npm install
```

## Usage

Adding a new task

To add a new task, use the add command followed by the task description:

```bash
todo-cli add "Buy milk"
```
Listing all tasks

To list all tasks, use the `list` command:

```bash
todo-cli list
```
Marking a task as completed

To mark a task as completed, use the `mark` command followed by the task ID and the status (`completed` or `pending`):

```bash
todo-cli mark 1 completed
```
Removing a task

To remove a task, use the `remove` command followed by the task ID:

```bash
todo-cli remove 1
```
## Demo
[![Watch the video](https://drive.google.com/file/d/1W4ubC9N6zyB0SKOLYG2qQtk-GAml7rMI/view?usp=drive_link)](https://drive.google.com/file/d/1tJnw08si9vTkHx0th90mA68CfdEpoPst/view?usp=drive_link)