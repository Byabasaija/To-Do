import { projectLogic } from './projectLogic';

const todoLogic = () => {
  const todo = (title, priority, dueDate, description) => ({
    title, priority, date: dueDate, description, isCompleted: false,
  });


  const getProject = (id) => projectLogic().get(id);


  const all = (projectId) => {
    const project = getProject(projectId);
    const todoList = JSON.parse(localStorage.getItem(project.title)) || [];
    return todoList.sort((a, b) => (a.isCompleted - b.isCompleted));
  };

  const save = (todo, projectId) => {
    const project = getProject(projectId);
    const todoList = all(projectId);
    if (todoList) {
      todoList.push(todo);
      localStorage.setItem(project.title, JSON.stringify(todoList));
    } else {
      localStorage.setItem(project.title, JSON.stringify([todo]));
    }
  };

  const remove = (projectId, todoId) => {
    const todoList = all(projectId);
    const project = getProject(projectId);
    todoList.splice(todoId, 1);
    localStorage.setItem(project.title, JSON.stringify(todoList));
  };

  const edit = (projectId, todoId, newTodo) => {
    const todoList = all(projectId);
    const todo = todoList[todoId];
    const project = getProject(projectId);
    todo.title = newTodo.title;
    todo.priority = newTodo.priority;
    todo.date = newTodo.date;
    todo.description = newTodo.description;
    todo.isCompleted = newTodo.isCompleted;
    localStorage.setItem(project.title, JSON.stringify(todoList));
  };

  const get = (projectId, todoId) => {
    const todoList = all(projectId);
    return todoList[todoId];
  };


  return {
    todo, all, save, remove, edit, get, getProject,
  };
};

const prepareToDo = (todoLogic, todoListView) => {
  const logic = todoLogic();
  const view = todoListView();

  const addTodo = (title, priority, dueDate, description, projectId, id = null) => {
    const newTodo = logic.todo(title, priority, dueDate, description);
    if (id) {
      logic.edit(projectId, id, newTodo);
    } else {
      logic.save(newTodo, projectId);
    }
  };

  const showtodoList = (projectId = 0) => {
    view.render(projectId, logic.getProject(projectId), logic.all(projectId));
  };
   
  const removeTodo = (projectId, todoId) => {
    logic.remove(projectId, todoId);
  };

  const editTodo = (projectId, todoId) => {
    view.updateTodo(logic.get(projectId, todoId), todoId);
  };

  const completeTodo = (projectId, todoId) => {
    const todo = logic.get(projectId, todoId);
    todo.isCompleted = !todo.isCompleted;
    logic.edit(projectId, todoId, todo);
  };


  return {
    addTodo, showtodoList, removeTodo, editTodo, completeTodo,
  };
};


export { todoLogic, prepareToDo };
