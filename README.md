# React Todo List App

## A Brief Introduction

This project is a simple react todo list app.
The deployed app can be viewed [here](https://priya-m1.github.io/react_todo_list_app/)

The MVP requirements are that a user:

- can add a todo to the todo to the list
- can delete a todo to the todo to the list displayed on the view
- change the status of a todo (marking a todo as complete)

![Todo App](https://github.com/Priya-M1/react_todo_list_app/blob/main/image.PNG?raw=true)

## The App

- The project is initialised with create-react-app
- Nano ID to generate a unique string ID for each to do

## Components

### The Component Tree

A diagram of the component tree can be found [here](component_tree.drawio)

### The Components

1. App

   _state_

   - list of to dos

   _behaviour_

   - add item to list
   - remove item from list
   - toggle complete status of item
   - render an Input and List

2. Header

   _behaviour_

   - renders the of the app

3. TodoInput

   _state_

   - todo input text

   _props_

   - add todo function

   _behaviour_

   - render an input field and a button
   - change of input text will update state of this component
   - button click will call the add function from props with value of input

4. TodoList

   _props_

   - array of to dos
   - delete function
   - toggle complete function

   _behaviour_

   - render an array of todos

5. TodoListItem

   _props_

   - todo item
   - delete function
   - toggle complete function

   _behaviour_

   - render complete checkbox, the todo text and a delete button
   - when the completion checkbox is clicked call the toggle complete function to chnage the status of the item at this index
   - when the delete button is clicked call the delete function to delete item at this index

## What did I learn?

- applying customised tyling to the checkbox using CSS
- using ternary operator to assign the class of the todo item description, which then uses css to add the line through text decoration for the todo that is complete
- the useState react hook
- using dynamic values in the templates
- using multiple components and nested components
- click and change events
- spread operator
- using nanoid to create a unique id which was used for the key property
- props and destructing props in react
- passing functions to components
