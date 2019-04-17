class ProjectSettings {
    constructor(title = "Untitled", originalTitle = "Untitled", cleaning = "", translation = "", typesetting = "", qualitycheck = "", filesSource = "") {
        this.title = title;
        this.originalTitle = originalTitle;
        this.cleaning = cleaning;
        this.translation = translation;
        this.typesetting = typesetting;
        this.qualitycheck = qualitycheck;
        this.filesSource = filesSource;
        this.lastUpdate = Date.now();
    }

    updateLastUpdate() {
        this.lastUpdate = Date.now();
    }
}

module.exports = ProjectSettings;