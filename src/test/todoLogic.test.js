import { prepareToDo, todoLogic } from '../logic/todoLogic';

import todoView from '../view/todoListView';


const todotest = prepareToDo(todoLogic, todoView);

describe('tests for prepareTodo', () => {
  test('should add todo for a project', () => {
    todotest.addTodo('testing', 'low', '2021-04-11', 'some desc', 0);
    const todos = todoLogic().all(0);
    expect(todos.length).toBe(1);
  });

  test('should delete Todos from a project', () => {
    todotest.addTodo('testing', 'low', '2021-04-11', 'some desc', 0);
    todotest.removeTodo(0, 1);
    const todos = todoLogic().all(0);
    expect(todos.length).toBe(1);
  });

  test('should complete todo for a project', () => {
    todotest.completeTodo(0, 0);
    const todo = todoLogic().get(0, 0);
    expect(todo.isCompleted).toBeTruthy();
  });
});