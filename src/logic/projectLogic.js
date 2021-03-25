const projectLogic = () => {
    const project = (title) => ({ title });
  
    const all = () => JSON.parse(localStorage.getItem('projects')) || [{ title: 'Today' }];
  
    const save = (project) => {
      const projects = all();
      if (projects) {
        if (!projects.some(item => item.title === project.title)) {
          projects.push(project);
          localStorage.setItem('projects', JSON.stringify(projects));
        }
      } else {
        localStorage.setItem('projects', JSON.stringify([project]));
      }
    };
  
    const get = (id) => {
      const projects = all();
      return projects[id];
    };
  
  
    return {
      project, all, save, get,
    };
  };

  
  
  export default projectLogic  ;