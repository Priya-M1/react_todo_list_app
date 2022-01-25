import "./styles.css";

function TodoListItem({ todo, toggleComplete, handleDelete }) {
	return (
		<div className="todolistitem-div">
			<div className="todolistitem-item">
				<input
					type="checkbox"
					onChange={() => toggleComplete(todo.id)}
					className="todolistitem-complete"
				/>
				<p className="todolistitem-desc">{todo.description}</p>
				<button
					onClick={() => handleDelete(todo.id)}
					className="todolistitem-delete-button"
				>
					<i class="fa fa-minus-square fa-1x" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	);
}

export default TodoListItem;
