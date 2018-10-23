import { PureComponent } from 'react';

import TodoItem from './todo-item';

export default class TodoList extends PureComponent {
    componentDidMount() {
        this.props.todos.on('add', this._forceUpdate);
        this.props.todos.on('remove', this._forceUpdate);
    }
    _forceUpdate = () => {
        this.forceUpdate();
    };
    _handleDoneClick = model => {
        this.props.todos.removeModelWithId(model.id());
    };
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.get('id')}
                        todo={todo}
                        onDoneClick={this._handleDoneClick}
                    />
                ))}
            </ul>
        );
    }
}
