import "./App.css";

import { useState } from "react";

import Header from "../Header";
import TodoList from "../TodoList";
import TodoInput from "../TodoInput";
import { nanoid } from "nanoid";

function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(todo) {
		const newTodo = {
			id: nanoid(),
			description: todo,
			isComplete: false,
		};
		setTodos([...todos, newTodo]);
	}

	function handleDelete(id) {
		const updatedTodos = [...todos].filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	}

	function toggleComplete(id) {
		const updatedTodos = [...todos].map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	}

	return (
		<div>
			<Header />
			<TodoInput addTodo={addTodo} />
			<TodoList
				todos={todos}
				handleDelete={handleDelete}
				toggleComplete={toggleComplete}
			/>
		</div>
	);
}

export default App;
