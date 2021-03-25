const prepareToDo = (todoModel, todoListView) => {
    const model = todoModel();
    const view = todoListView();
  
    const addTodo = (title, priority, dueDate, description, projectId, id = null) => {
      const newTodo = model.todo(title, priority, dueDate, description);
      if (id) {
        model.edit(projectId, id, newTodo);
      } else {
        model.save(newTodo, projectId);
      }
    };
  
    const showTodos = (projectId = 0) => {
      view.render(projectId, model.getProject(projectId), model.all(projectId));
    };
  
  
    const completeTodo = (projectId, todoId) => {
      const todo = model.get(projectId, todoId);
      todo.isCompleted = !todo.isCompleted;
      model.edit(projectId, todoId, todo);
    };
  
  
    return {
      addTodo, showTodos,  completeTodo,
    };
  };

  export default prepareToDo;