const ProjectSettings = require('./ProjectSettings.js');
const ProjectChapter = require('./ProjectChapter.js');

class Project {
    constructor(chapters = [], settings = new ProjectSettings()) {
        this.chapters = chapters;
        this.settings = settings;
    }

    addChapter( chapter ) {
        this.chapters.push( chapter );
    }

    removeChapter( chapterIndex ) {
        this.chapters.splice( chapterIndex );
    }
}

module.exports = Project;