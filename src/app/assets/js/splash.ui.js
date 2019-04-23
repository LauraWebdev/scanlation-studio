const electron = require('electron');
const { dialog, remote } = electron.remote;
const settings = require('electron-settings');
const ProjectTools = require('./assets/js/project.functions.js');

// REFERENCES

// GENERAL FUNCTIONS
function loadProjects() {
    // Load latest Projects from settings
    let recentProjects = ProjectTools.getRecentProjects();
    let recentProjectsTable = document.querySelector("#recentProjects");

    recentProjects.forEach(function(data) {
        let recentProjectsTableNew = document.createElement("tr");
        let recentProjectsTableNew1 = document.createElement("td");
        let recentProjectsTableNew2 = document.createElement("td");

        recentProjectsTableNew1.innerHTML = data.title + "<br />" + data.path;
        recentProjectsTableNew2.innerText = data.lastUpdate;

        recentProjectsTableNew.appendChild(recentProjectsTableNew1);
        recentProjectsTableNew.appendChild(recentProjectsTableNew2);

        recentProjectsTable.appendChild(recentProjectsTableNew);
    });
}

// UI FUNCTIONS
function uiNewProject() {
    // Show OPEN FOLDER Dialog
    let newProjectPath = dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    if(newProjectPath !== undefined) {
        console.log("[UI][NewProject] ProjectPath: " + newProjectPath);

        // Create new Project
        let projectCreationResult = ProjectTools.newProject(newProjectPath);
        if(projectCreationResult[0] === true) {
            // Project created successfully, open project!
            electron.ipcRenderer.send('transition-loadproject', newProjectPath);
        } else {
            // Project could not be created, error display!
            console.error("[UI][NewProject] Project Creation wasn't successful!");
            console.error(projectCreationResult[1]);
        }
    } else {
        console.error("[UI][NewProject] Cancelled Path Selection");
    }
}
function uiOpenProject() {
    // Show OPEN FOLDER Dialog
    let openProjectPath = dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    if(openProjectPath !== undefined) {
        // Open Project
        electron.ipcRenderer.send('transition-loadproject', openProjectPath);
    } else {
        console.error("[UI][OpenProject] Cancelled Path Selection");
    }
}
function uiSelectProject( projectPath ) {
    // TODO
}

// RUNTIME
loadProjects();