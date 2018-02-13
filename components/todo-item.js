const TodoItem = props => {
  const { onCompleted, todo } = props
  const handleCompleted = () => onCompleted(todo.id)
  return (
    <li>
      <span>{todo.name}</span>
      &nbsp;
      <button onClick={handleCompleted}>done</button>
    </li>
  )
}

export default TodoItem
