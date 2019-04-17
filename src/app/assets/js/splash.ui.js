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
    // TODO

    // Create new Project
    ProjectTools.newProject("debug1234");
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