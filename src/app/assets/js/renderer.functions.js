const Project = require('models/Project.js');
const ProjectSettings = require('models/ProjectSettings.js');
const ProjectChapter = require('models/ProjectChapter.js');
const ProjectChapterPage = require('models/ProjectChapterPage.js');
const ProjectChapterPageText = require('models/ProjectChapterPageText.js');
const ProjectChapterBlock = require('models/ProjectChapterBlock.js');

const html2canvas = require('html2canvas');

function render( renderPlane, project ) {
    let rp = document.querySelector( renderPlane );

    // Clear RenderPlane
    rp.innerHTML = "";

    // Rebuild RenderPlane based on the project
    // TODO
}
async function capture( renderPlane ) {
    await html2canvas(document.querySelector( renderPlane )).then(canvas => {
        return canvas;
    });
}

module.exports = {
    render,
    capture
}