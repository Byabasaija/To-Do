const prepareProject = (projectLogic, projectView) => {
    const model = projectLogic();
    const view = projectView();
  
    const addProject = title => {
      const newProject = model.project(title);
      model.save(newProject);
    };
  
    const showProjects = () => {
      view.render(model.all());
    };
  
    return { addProject, showProjects };
  };

  export default prepareProject