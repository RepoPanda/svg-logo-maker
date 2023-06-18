//Object model that will create a new SVG document
class SvgDoc {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }

    addShape(shape) {
        this.shapeEl = shape.render();
    }

    addText(text, color) {
        this.textEl = `<text x="150" y="125" font-size="75" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
};

module.exports = SvgDoc;