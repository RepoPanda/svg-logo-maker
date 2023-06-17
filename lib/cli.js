const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./shapes.js");
const SvgDoc = require("./SvgDoc.js");
const fs = require('fs');



// CLI class that will handle the command line interface
class CLI {
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'textSelection',
                message: 'Please input three characters to convert to SVG:',
                validate: (text) => {
                    if (text.length === 3) {
                        return true;
                    } else {
                        return 'Please input three characters';
                    }
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please select the color of the text:'
            },
            {
                type: 'list',
                name: 'shapeSelection',
                message: 'Please select a shape from the list for your SVG:',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please select the color of the shape:'
            }
        ])
        .then(({ textSelection, textColor, shapeSelection, shapeColor }) => {
            const svgDoc = new SvgDoc();
            svgDoc.addText(textSelection, textColor);
            let shape;
            switch (shapeSelection) {
                case 'Circle':
                    shape = new Circle();
                    break;
                case 'Triangle':
                    shape = new Triangle();
                    break;
                case 'Square':
                    shape = new Square();
                    break;
            }
            shape.setColor(shapeColor);
            svgDoc.addShape(shape);
            return fs.writeFileSync('./examples/logo.svg', svgDoc.render()) ;
        })
    }
};

module.exports = CLI;