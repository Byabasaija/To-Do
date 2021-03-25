import {projectLogic} from './projectLogic';

const todoModel = () => {
  const todo = (title, priority, dueDate, description) => ({
    title, priority, date: dueDate, description, isCompleted: false,
  });


  const getProject = (id) => projectLogic
  ().get(id);


  const all = (projectId) => {
    const project = getProject(projectId);
    const todos = JSON.parse(localStorage.getItem(project.title)) || [];
    return todos.sort((a, b) => (a.isCompleted - b.isCompleted));
  };

  const save = (todo, projectId) => {
    const project = getProject(projectId);
    const todos = all(projectId);
    if (todos) {
      todos.push(todo);
      localStorage.setItem(project.title, JSON.stringify(todos));
    } else {
      localStorage.setItem(project.title, JSON.stringify([todo]));
    }
  };

  const get = (projectId, todoId) => {
    const todos = all(projectId);
    return todos[todoId];
  };

  return {
    todo, all, save, get, getProject
  };
};



export default todoModel ;

