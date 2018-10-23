import { PureComponent } from 'react';

import TodoModel from './models/todo-model';

let id = 0;

export default class CreateTodoForm extends PureComponent {
    state = {
        text: '',
    };
    _handleInputChange = e => {
        this.setState({
            text: e.target.value,
        });
    };
    _handleSubmit = e => {
        e.preventDefault();
        const text = this.state.text.trim();
        if (!text) return;
        const { onTodoAdded } = this.props;
        if (onTodoAdded) {
            onTodoAdded(
                new TodoModel({
                    id: ++id,
                    text: text,
                }),
            );
        }
        this.setState({
            text: '',
        });
    };
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <span>
                    <input
                        onChange={this._handleInputChange}
                        value={this.state.text}
                    />{' '}
                    <button>Save</button>
                </span>
            </form>
        );
    }
}
