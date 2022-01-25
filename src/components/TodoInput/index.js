import { useState } from "react";
import { nanoid } from "nanoid";

function TodoInput({ addTodo }) {
	const [todo, setTodo] = useState("");

	function handleNewTodo(event) {
		event.preventDefault();
		setTodo(event.target.value);
	}

	function handleSubmit(event) {
		// prevent default when submitting a form
		event.preventDefault();
		addTodo(todo);
		setTodo("");
	}

	return (
		<form action="">
			<input type="text" placeholder="add a todo" onChange={handleNewTodo} />
			<button type="submit" onClick={handleSubmit}>
				Add Todo
			</button>
		</form>
	);
}

export default TodoInput;
