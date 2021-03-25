const projectView = () => {
    const render = projects => {
      const element1 = `
        <ul class="project-list-group pl-0 mb-4">
          ${projects.map((project, index) => `<li class=" project-item" data-index=${index}"><span class='mr-2'> <i class='fa fa-tasks'></i></span>${project.title}</li>`).join('')}
        </ul>
      `;
      document.getElementById('projects').innerHTML = element1;
    };
  
    return { render };
  };

  export default projectView;