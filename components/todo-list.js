import TodoItem from './todo-item'

const TodoList = props => {
  const { onTodoCompleted, todos } = props
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onCompleted={onTodoCompleted} />
      ))}
    </ul>
  )
}

export default TodoList
