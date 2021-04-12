import { prepareProject, projectLogic } from '../logic/projectLogic';
import projectView from '../view/projectView';

const projectTest = prepareProject(projectLogic, projectView);

describe('tests for porjectController', () => {
  test('should add new project', () => {
    projectTest.addProject('Test project 1');
    const projects = projectLogic().all();
    expect(projects.length).toBe(2);
  });

  test('should get added new project', () => {
    projectTest.addProject('Test project 1');
    const project = projectLogic().get(1);
    expect(project.title).toEqual('Test project 1');
  });

  test('should get all projects', () => {
    projectTest.addProject('Test project 1');
    projectTest.addProject('Test project 2');
    projectTest.addProject('Test project 3');
    const projects = projectLogic().all();
    expect(projects).toEqual([
      { title: 'Today' },
      { title: 'Test project 1' },
      { title: 'Test project 2' },
      { title: 'Test project 3' },
    ]);
  });
});