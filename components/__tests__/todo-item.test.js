import { shallow } from 'enzyme';

import TodoModel from '../models/todo-model';
import TodoItem from '../todo-item';

jest.unmock('../todo-item');

describe('TodoItem', () => {
    const ctx = {};

    beforeEach(() => {
        ctx.todo = new TodoModel({ id: 'id', text: 'text' });
    });

    it('should render', () => {
        const component = shallow(<TodoItem todo={ctx.todo} />);
        expect(component).toMatchSnapshot();
    });

    it('should handle done click', () => {
        const handleDoneClick = jest.fn();
        const component = shallow(
            <TodoItem onDoneClick={handleDoneClick} todo={ctx.todo} />,
        );
        component.find('button').simulate('click');
        expect(handleDoneClick).toHaveBeenCalledWith(ctx.todo);
    });
});
