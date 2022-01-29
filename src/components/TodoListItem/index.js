import "./styles.css";

function TodoListItem({ todo, toggleComplete, handleDelete }) {
	return (
		<div className="container-div">
			<div className="container">
				<input
					type="checkbox"
					id={todo.id}
					onChange={() => toggleComplete(todo.id)}
					className="todolistitem-checkbox"
				/>
				<label for={todo.id} className="todolistitem-desc"></label>
				<p className={todo.isComplete ? "complete" : "notComplete"}>
					{todo.description}
				</p>
				<button
					onClick={() => handleDelete(todo.id)}
					className="todolistitem-delete-button"
				>
					<i class="fa fa-minus-square fa-2x" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	);
}

export default TodoListItem;
