import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap';
import 'jquery';
import { projectLogic, prepareProject } from './logic/projectLogic';
import projectView from './view/projectView';
import { todoLogic, prepareToDo } from './logic/todoLogic';
import todoListView from './view/todoListView';

const form = document.getElementById('project-form');
const todoForm = document.getElementById('todo-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const { project } = form;
  if (project.value !== '' && project.value !== ' ') {
    const prepare = prepareProject(projectLogic, projectView);
    prepare.addProject(project.value);
    prepare.showProjects();
    form.reset();
    $('#projectModal').modal('hide'); // eslint-disable-line
  }
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const {
    title, priority, date, description, id,
  } = form;
  const projectId = document.getElementById('project-title').getAttribute('data-project-index');
  if (title.value !== '' && title.value !== ' ') {
    const prepare = prepareToDo(todoLogic, todoListView);
    prepare.addTodo(
      title.value,
      priority.value,
      date.value,
      description.value,
      parseInt(projectId, 10),
      id.value,
    );
    prepare.showtodoList(projectId);
    form.reset();
    $('#todoModal').modal('hide'); // eslint-disable-line
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const projects = projectLogic().all();
  prepareProject(projectLogic, projectView).showProjects();
  if (projects.length > 0) {
    prepareToDo(todoLogic, todoListView).showtodoList();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-item')) {
    const prepare = prepareToDo(todoLogic, todoListView);
    prepare.showtodoList(parseInt(e.target.getAttribute('data-index'), 10));
  }

  if (e.target.classList.contains('add-todo')) {
    document.querySelector('.add-task-btn').style.display = 'block';
    todoForm.reset();
    todoForm.id.value = '';
  }

  if (e.target.classList.contains('todo-checkmark')) {
    const todo = e.target.getAttribute('data-todo');
    const project = e.target.getAttribute('data-project');
    const prepare = prepareToDo(todoLogic, todoListView);
    prepare.completeTodo(parseInt(project, 10), parseInt(todo, 10));
    prepare.showtodoList(parseInt(project, 10));
  }
});
