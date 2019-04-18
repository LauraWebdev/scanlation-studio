const electron = require('electron');
const { dialog, remote } = electron.remote;
const ProjectTools = require('./assets/js/project.functions.js');
const RenderTools = require('./assets/js/renderer.functions.js');

// REFERENCES
let renderplane = document.querySelector(".renderplane");

// UI FUNCTIONS
function uiBackToSplash() {
    window.location = 'splash.htm';
}

// RUNTIME
electron.ipcRenderer.on('transition-loadproject', (event, args) => {
    let projectPath = args;

    console.log("[APP] Loading Project...");
    console.log("[APP] ProjectPath: " + projectPath);
    if(projectPath !== undefined || projectPath !== "") {
        let project = ProjectTools.loadProject(projectPath);

        if(project[0] === true) {
            console.log("[APP] Rendering...");
            RenderTools.render(renderplane, project[1], 1, 1);
        } else {
            console.error("[APP] Couldn't load Project!");
            console.error(project[1]);
        }
    } else {
        console.error("[APP] ProjectPath is not set!");
    }
});