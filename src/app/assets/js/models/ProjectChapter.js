const ProjectChapterPage = require('./ProjectChapterPage.js');

class ProjectChapter {
    constructor(pages = []) {
        this.pages = pages;
    }

    addPage( chapterPage ) {
        this.pages.push( chapterPage );
    }

    removePage( pageIndex ) {
        this.pages.splice( pageIndex );
    }
}

module.exports = ProjectChapter;