/*
Visitor pattern is a behavioural design pattern that allows you to further operations to objects without modifying them.
This involves two main components
1.Visitor: An abstract class declaring a visit operation for each type of element in the object structure
2.Element: An abstract class declaring an accept method that takes a visitor as an argument

The main idea is that the operations that you want to perform on the elements of the object structure are 
encapsulated in a seperate visitor object, which allows for easy addition of new operations without altering 
the exisitng object structure
*/

/* Without visitor pattern */

/*
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  render() {
    console.log(`Rendering a circle with radius ${this.radius}`);
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  render() {
    console.log(
      `Rendering a rectangle with width ${this.width} and height ${this.height}`
    );
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }

  render() {
    console.log(
      `Rendering a triangle with base ${this.base} and height ${this.height}`
    );
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(4, 3)];

for (const shape of shapes) {
  console.log(`Area: ${shape.calculateArea()}`);
  shape.render();
}

*/

/* With visitor pattern */

class ShapeVisitor {
  visitCircle(circle) {}
  visitRectangle(rectangle) {}
  visitTriangle(triangle) {}
}

class AreaCalculatorVisitor extends ShapeVisitor {
  visitCircle(circle) {
    return Math.PI * circle.radius * circle.radius;
  }

  visitRectangle(rectangle) {
    return rectangle.width * rectangle.height;
  }

  visitTriangle(triangle) {
    return 0.5 * triangle.base * triangle.height;
  }
}

class RenderVisitor extends ShapeVisitor {
  visitCircle(circle) {
    console.log(`Rendering a circle with radius ${circle.radius}`);
  }

  visitRectangle(rectangle) {
    console.log(
      `Rendering a rectangle with width ${rectangle.width} and height ${rectangle.height}`
    );
  }

  visitTriangle(triangle) {
    console.log(
      `Rendering a triangle with base ${triangle.base} and height ${triangle.height} and side ${triangle.side}`
    );
  }
}

class PerimeterCalculator extends ShapeVisitor {
  visitCircle(circle) {
    return 2 * Math.PI * circle.radius;
  }

  visitRectangle(rectangle) {
    return 2 * (rectangle.width + rectangle.height);
  }

  visitTriangle(triangle) {
    return triangle.height + triangle.base + triangle.side;
  }
}

class Shape {
  accept(visitor) {}
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  accept(visitor) {
    return visitor.visitCircle(this);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  accept(visitor) {
    return visitor.visitRectangle(this);
  }
}

class Triangle extends Shape {
  constructor(base, height, side) {
    super();
    this.base = base;
    this.height = height;
    this.side = side;
  }

  accept(visitor) {
    return visitor.visitTriangle(this);
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(4, 3, 5)];

const areaCalculator = new AreaCalculatorVisitor();
const renderer = new RenderVisitor();
const perimeterCalculator = new PerimeterCalculator();

for (let shape of shapes) {
  console.log(
    `${shape.constructor.name}'s Area: ${shape.accept(areaCalculator)}`
  );
  console.log(
    `${shape.constructor.name}'s Perimeter: ${shape.accept(
      perimeterCalculator
    )}`
  );
  shape.accept(renderer);
}

/* Advantages of visitor pattern

Seperation of concerns
This pattern allows you to seperate the algorithm from the objects on which it operates, making code easier to
manage and understand. Since operations are encapsulated in the visitor, it's easier to update or extend the
functionality without affecting exisitng object structure

Open/Closed principle
You can add new operations to the object structure without modifying the classes, adhering to the open/closed 
principle (open for extension and closed for modification)

Complex operations
This pattern is beneficial when complext operations on object which need to be performed across a collection of
objects that share a common interface or base class.

Visitor pattern commonly used in compilers for traversing abstract syntax trees 
Performing operations files system like counting files, calculating file sizes
Coverting documents from different format by visiting different types of document elements

*/
