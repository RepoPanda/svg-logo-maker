// Parent shape class
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};

// child circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
};

// child triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};


// child square class
class Square extends Shape {
    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`;
    }
};

module.exports = {Circle, Triangle, Square};