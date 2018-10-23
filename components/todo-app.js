import { PureComponent } from 'react';

import CreateTodoForm from './create-todo-form';
import TodoList from './todo-list';
import TodosCollection from './models/todos-collection';

export default class TodoApp extends PureComponent {
    constructor(props) {
        super(props);
        this._todos = new TodosCollection();
    }
    _handleTodoAdded = todo => {
        this._todos.add(todo);
    };
    render() {
        return (
            <div>
                <h1>TODOS</h1>
                <CreateTodoForm onTodoAdded={this._handleTodoAdded} />
                <TodoList todos={this._todos} />
            </div>
        );
    }
}
