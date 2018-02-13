import { PureComponent } from 'react'

import CreateTodoForm from './create-todo-form'
import TodoList from './todo-list'

export default class TodoApp extends PureComponent {
  state = {
    todos: [],
  }
  handleTodoAdded = todo => {
    this.setState({
      todos: [...this.state.todos, todo],
    })
  }
  handleTodoCompleted = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId),
    })
  }
  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <CreateTodoForm onSubmit={this.handleTodoAdded} />
        <TodoList
          todos={this.state.todos}
          onTodoCompleted={this.handleTodoCompleted}
        />
      </div>
    )
  }
}
