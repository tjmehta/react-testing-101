import { PureComponent } from 'react';

class TodoItem extends PureComponent {
    _handleDoneClick = () => {
        if (!this.props.onDoneClick) return;
        this.props.onDoneClick(this.props.todo);
    };
    render() {
        const { todo } = this.props;
        return (
            <li>
                <span>{todo.get('text')}</span>
                <button onClick={this._handleDoneClick}>done</button>
            </li>
        );
    }
}

export default TodoItem;
