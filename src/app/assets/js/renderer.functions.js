const Project = require('./models/Project.js');
const ProjectSettings = require('./models/ProjectSettings.js');
const ProjectChapter = require('./models/ProjectChapter.js');
const ProjectChapterPage = require('./models/ProjectChapterPage.js');
const ProjectChapterPageText = require('./models/ProjectChapterPageText.js');
const ProjectChapterPageBlock = require('./models/ProjectChapterPageBlock.js');

const html2canvas = require('html2canvas');

function render( renderPlane, project, chapterToRender, pageToRender ) {
    console.log("[RENDERER] Begin Rendering");
    console.log("[RENDERER] Project Title: " + project.settings.title);
    console.log("[RENDERER] Render Area: Chapter " + chapterToRender + " Page " + pageToRender);

    // Clear RenderPlane
    renderPlane.innerHTML = "";

    // Load Blocks for RenderPlane
    let chapter = project.chapters[chapterToRender];

    // Check if chapter exists
    if(chapter === undefined) {
        console.log("[RENDERER] Chapter " + chapterToRender + " does not exist!");
        console.log(project.chapters);
        return [false, "Chapter does not exist."];
    }

    // Check if page exists
    let page = chapter.pages[pageToRender];
    if(page === undefined) {
        console.log("[RENDERER] Page " + pageToRender + " does not exist!");
        console.log(chapter.pages);
        return [false, "Page does not exist."];
    }

    console.log("[RENDERER] Rendering Page " + pageToRender + " from Chapter " + chapterToRender);

    // Construct Blocks for RenderPlane
    // TODO

    console.log("[RENDERER] Finished Rendering");
    return [true, "Rendering completed"];
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