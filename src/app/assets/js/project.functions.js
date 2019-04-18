const fs = require('fs');
const path = require('path');
const Project = require('./models/Project.js');
const ProjectSettings = require('./models/ProjectSettings.js');

function loadProject( projectPath ) {
    console.log("[PROJECT][LOAD] Project Path: " + projectPath);

    // Load Settings JSON
    let project = new Project();

    return [true, project];
}

function newProject( projectPath, projectSlug, projectTitle, projectOriginalTitle ) {
    // Check if folder already exists
    if(fs.existsSync(projectPath + "/" + projectSlug)) {
        return [false, "Folder already exists!"];
    }

    // Create Folders
    try {
        fs.mkdirSync(projectPath + "/" + projectSlug);
        fs.mkdirSync(projectPath + "/" + projectSlug + "/Chapters");

        // Create Settings JSON
        let newProjectSettings = new ProjectSettings(projectTitle, projectOriginalTitle);
        let newProject = new Project([], newProjectSettings);

        // Save new Project
        let fileData = JSON.stringify(newProject);
        fs.writeFileSync(projectPath + "/" + projectSlug + "/ProjectSettings.sls", fileData);

        return [true, "Project created successfully!"];
    } catch(e) {
        console.error("[PROJECT][CREATE] Couldn't create project!");
        console.error(e.toString());
        return [false, e.toString()];
    }
}

module.exports = {
    loadProject,
    newProject
};
