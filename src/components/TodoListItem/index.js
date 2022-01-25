function TodoListItem({ todo, toggleComplete, handleDelete }) {
	return (
		<div>
			<input type="checkbox" onChange={() => toggleComplete(todo.id)} />
			<p>{todo.description}</p>
			<button onClick={() => handleDelete(todo.id)}>Delete</button>
		</div>
	);
}

export default TodoListItem;
