import TodoListItem from "../TodoListItem";

function TodoList({ todos, handleDelete, toggleComplete }) {
	return (
		<div>
			{todos.map((todo) => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					handleDelete={handleDelete}
					toggleComplete={toggleComplete}
				/>
			))}
		</div>
	);
}

export default TodoList;
