import "./styles.css";
import { useState } from "react";

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
		<form action="" className="todoinput-form">
			<input
				type="text"
				placeholder="add a todo"
				onChange={handleNewTodo}
				className="todoinput-input"
			/>
			<button
				type="submit"
				onClick={handleSubmit}
				className="todoinput-submit-button"
			>
				<i class="fa fa-plus-square fa-3x" aria-hidden="true"></i>
			</button>
		</form>
	);
}

export default TodoInput;
