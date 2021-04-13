import { todoLogic } from '../logic/todoLogic';

describe('should test todo logic', () => {
  test('should get 0 todo', () => {
    const todo = todoLogic().get(0, 0);
    expect(todo).toEqual(undefined);
  });

  test('should save the todo to list', () => {
    const todoObj = {
      title: 'test todo', priority: 'medium', dueDate: '2021-04-30', description: 'some to do.',
    };
    todoLogic().save(todoObj, 0);
    const todos = todoLogic().all(0);
    expect(todos).toEqual([todoObj]);
  });

  test('should delete the todo from list', () => {
    todoLogic().remove(0, 0);
    const todos = todoLogic().all(0);
    expect(todos.length).toBe(0);
  });

  test('should edit the todo item', () => {
    const todoObj = {
      title: 'test todo', priority: 'medium', dueDate: '2021-04-12', description: 'test todo desc.',
    };
    todoLogic().save(todoObj, 0);
    todoLogic().edit(0, 0, { title: 'updated title' });
    const todo = todoLogic().get(0, 0);
    expect(todo.title).toBe('updated title');
  });
});