import { useState } from 'react'
import classes from "./ToDoList.module.scss"

export function TodoList() {
	const [todos, setTodos] = useState([])

	function handleAddTodo(event) {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])

		event.target.elements.todo.value = ''
	}

	function handleResetTodos() {
		setTodos([])
	}

    function handleRemoveTodo(remove) {
        setTodos((todos) => todos.filter((e, index) => index !== remove));
      }

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input name="todo" />
				<button type="submit">Add</button>
			</form>
			<button onClick={handleResetTodos}>Reset</button>

			<ul>
				{todos.map((todo, index) => (
					<li className={classes.ToDo} key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                        </li>
				))}
			</ul>
		</div>
	)
}