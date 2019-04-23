const fs = require('fs');
const settings = require('electron-settings');
const Project = require('./models/Project.js');
const ProjectSettings = require('./models/ProjectSettings.js');

function loadProject( projectPath ) {
    // Load ProjectSettings
    let projectSettingsData = fs.readFileSync(projectPath + "/ProjectSettings.sls", "utf8");

    // Load Settings JSON
    let project = JSON.parse(projectSettingsData);

    // Change Window Title
    window.document.title = project.settings.title + " [" + projectPath + "] - ScanlationStudio";

    // Add Project to RecentProjects
    addToRecentProjects({path: projectPath, title: project.settings.title, lastUpdate: project.settings.lastUpdate});

    return [true, project];
}

function newProject( projectPath, projectTitle, projectOriginalTitle ) {
    // Check if folder already exists
    if(fs.existsSync(projectPath)) {
        return [false, "Folder already exists!"];
    }

    // Create Folders
    try {
        fs.mkdirSync(projectPath + "/Chapters");

        // Create Settings JSON
        let newProjectSettings = new ProjectSettings(projectTitle, projectOriginalTitle);
        let newProject = new Project([], newProjectSettings);

        // Save new Project
        let fileData = JSON.stringify(newProject);
        fs.writeFileSync(projectPath + "/ProjectSettings.sls", fileData);

        return [true, "Project created successfully!"];
    } catch(e) {
        console.error("[PROJECT][CREATE] Couldn't create project!");
        console.error(e.toString());
        return [false, e.toString()];
    }
}

function addToRecentProjects( projectPath ) {
    let currentRecentProjects = [];
    currentRecentProjects = settings.get("recentProjects");

    currentRecentProjects.unshift( projectPath );
    settings.set("recentProjects", currentRecentProjects);
}

function getRecentProjects() {
    return settings.get("recentProjects");
}

module.exports = {
    loadProject,
    newProject,
    addToRecentProjects,
    getRecentProjects
};
