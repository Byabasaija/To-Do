import { projectLogic } from '../logic/projectLogic';

describe('should test project logic', () => {
  test('should get default added project', () => {
    const project = projectLogic().get(0);
    expect(project.title).toEqual('Today');
  });

  test('should save the project', () => {
    const projectObj = { title: 'Test project' };
    projectLogic().save(projectObj);
    const projects = projectLogic().all();
    expect(projects).toEqual([{ title: 'Today' }, { title: 'Test project' }]);
  });
});