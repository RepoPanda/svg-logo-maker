const { Square, Triangle, Circle } = require("../lib/shapes.js");

// will test the circle class
test('should render a circle with a fill color of blue',  () => {
    const svgExpected = '<circle cx="150" cy="100" r="100" fill="blue" />'
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual(svgExpected);
})


// will test the triangle class
test('should render a triangle with a fill color of green',  () => {
    const svgExpected = '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toEqual(svgExpected);
});

// will test the square class
test('should render a square with a fill color of black',  () => {
    const svgExpected = '<rect x="75" y="35" width="150" height="150" fill="black" />'
    const square = new Square();
    square.setColor('black');
    expect(square.render()).toEqual(svgExpected);
});