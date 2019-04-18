const ProjectTools = require('./assets/js/project.functions.js');
const RenderTools = require('./assets/js/renderer.functions.js');

// REFERENCES

// UI FUNCTIONS
function uiBackToSplash() {
    window.location = 'splash.htm';
}

// RUNTIME
let project = ProjectTools.loadProject( "debug/" );
let renderplane = document.querySelector(".renderplane");

RenderTools.render(renderplane, project, 1, 1);