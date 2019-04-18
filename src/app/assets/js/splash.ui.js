const electron = require('electron');
const { dialog, remote } = electron.remote;
const ProjectTools = require('./assets/js/project.functions.js');

// REFERENCES

// GENERAL FUNCTIONS
function loadProjects() {
    // Load latest Projects from settings
    // TODO
}

// UI FUNCTIONS
function uiNewProject() {
    // Show OPEN FOLDER Dialog
    let newProjectPath = dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    if(newProjectPath !== undefined) {
        let newProjectSlug = "debug-" + Date.now().toString();

        console.log("[UI][NewProject] ProjectPath: " + newProjectPath);
        console.log("[UI][NewProject] ProjectSlug: " + newProjectSlug);

        // Create new Project
        let projectCreationResult = ProjectTools.newProject(newProjectPath, newProjectSlug);
        if(projectCreationResult[0] === true) {
            // Add Project to latest Projects
            // TODO

            // Project created successfully, open project!
            electron.ipcRenderer.send('transition-loadproject', newProjectPath + "/" + newProjectSlug);
        } else {
            // Project could not be created, error display!
            console.error("[UI][NewProject] Project Creation wasn't successful!");
            console.error(projectCreationResult[1]);
        }
    } else {
        console.error("[UI][NewProject] Cancelled Path Selection");
    }
}
function uiOpenProject( projectPath ) {
    // Show OPEN FOLDER Dialog
    // TODO

    // Add Project to latest Projects
    // TODO

    // Send to App
    window.location = 'app.htm';
}
function uiSelectProject( projectPath ) {

    // Add Project to latest Projects
    // TODO

    // Send to App
    window.location = 'app.htm';
}

// RUNTIME
loadProjects();