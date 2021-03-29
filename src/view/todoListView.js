
const todoListView = () => {
  const render = (projectId, project, todoList) => {
    const element2 = `
        <div  class="d-flex justify-content-between pr-2  py-2">
        <h3 class="text-center fst-italic" data-project-index="${projectId}" id="project-title">${project.title}</h3>
          <button type="button" class="btn btn-primary add-todo" data-toggle="modal" data-target="#todoModal">
          <i class="far fa-plus-square"></i>
          Task
          </button>
        </div>
        <hr/>
        <ul class="list-group list-group-flush mb-4">
        ${todoList.map((todo, index) => `
              <div class="d-flex align-items-center">
                <input type="checkbox" id="todo${index}" data-todo=${index} data-project="${projectId}" class="custom-checkbox todo-checkmark" ${todo.isCompleted ? 'checked' : ''} >
                <label for="todo${index}" class="ml-3 d-flex justify-content-between w-100 align-items-center mb-0">
                  <div class="mb-0">
                    <h4 class="task-title">${todo.title}</h4>
                    <h5 class="mb-0  fst-italic"><small> <span>${todo.priority}</span></small></h5>
                    <p class="mb-0  fst-italic"><small> <span>${todo.date}</span></small></p>
                    <p class="mb-0  fst-italic"><small> <span>${todo.description}</span></small></p>
                  </div>
                </label>
                <button type="submit" class="btn btn-outline-success edit-todo" data-toggle="modal" data-target="#todoModal" data-todo="${index}" data-project="${projectId}">Edit</button>
                <button type="submit" class="btn btn-outline-danger delete-todo" data-todo="${index}" data-project="${projectId}" >Delete</button>
              </div>
            </li>
          `).join('')}
        </ul>
        `;
    document.getElementById('todoList').innerHTML = element2;
  };


  return { render };
};

export default todoListView;