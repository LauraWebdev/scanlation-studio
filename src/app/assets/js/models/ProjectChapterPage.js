class ProjectChapterPage {
    constructor(blocks = [], texts = {}) {
        this.blocks = blocks;
        this.texts = texts;
    }

    addBlock( block ) {
        this.blocks.push( block );
    }

    removeBlock( blockIndex ) {
        this.blocks.splice( blockIndex );
    }

    addText( text ) {
        this.texts.push( text );
    }

    removeText( textIndex ) {
        this.texts.splice( textIndex );
    }
}

module.exports = ProjectChapterPage;