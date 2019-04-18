const Project = require('./models/Project.js');
const ProjectSettings = require('./models/ProjectSettings.js');

function loadProject( projectPath ) {
    console.log("[PROJECT] Load Project: " + projectPath);

    // Load Settings JSON
    return new Project();
}

function newProject( projectPath, projectTitle, projectOriginalTitle ) {
    console.log("{PROJECT] Create Project: " + projectPath);

    // Create Folders
    // TODO

    // Create Settings JSON
    let newProjectSettings = new ProjectSettings(projectTitle, projectOriginalTitle);
    let newProject = new Project([], newProjectSettings);

    // Save new Project
    let fileData = JSON.stringify(newProject);
    // TODO

    console.log(fileData);

    // Load Project
    this.loadProject( projectPath);
}

module.exports = {
    loadProject,
    newProject
};
