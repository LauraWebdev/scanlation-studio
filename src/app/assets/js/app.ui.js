const electron = require('electron');
const { dialog, remote } = electron.remote;
const ProjectTools = require('./assets/js/project.functions.js');
const RenderTools = require('./assets/js/renderer.functions.js');

// REFERENCES
let renderplane = document.querySelector(".renderplane");
let project;
let currentTool = 0;

// UI FUNCTIONS
let pageTools = document.querySelectorAll("aside.tools .tool");
pageTools.forEach(function(pageTool) {
    let toolID = pageTool.dataset.tool;

    pageTool.addEventListener('click', function() {
       toggleTool(toolID);
    });
});

function toggleTool( toolID ) {
    currentTool = toolID;

    pageTools.forEach(function(pageTool) {
        let toolID = pageTool.dataset.tool;

        if(currentTool === toolID) {
            pageTool.classList.add("active");
        } else {
            pageTool.classList.remove("active");
        }
    });
}

function init( projectPath ) {
    console.log("[APP] Loading Project...");
    if(projectPath !== undefined || projectPath !== "") {
        project = ProjectTools.loadProject(projectPath);

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
}

// RUNTIME
electron.ipcRenderer.on('transition-loadproject', (event, args) => {
    let projectPath = args[0];

    if(projectPath !== undefined) {
        init(projectPath);
    }
});

// DEBUG
init( "F:\\Development\\scanlation-studio\\tests\\debugManga" );