import Collection from './collection';
import TodoModel from './todo-model';

export default class TodosCollection extends Collection {
    static Model = TodoModel;
    markTodoCompleted(todoId) {
        this.removeModelWithId(todoId);
    }
}
