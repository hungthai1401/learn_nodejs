const rectangle = require('./rectangle');
console.log(`The area of rectangle with width = 10, height = 20 is ${rectangle.area(10, 20)}`);
console.log(`The circumference of rectangle with width = 10, height = 20 is ${rectangle.circumference(10, 20)}`);
console.log(`The default date is ${rectangle.defaultDate}`);
console.log(`The directory name is ${rectangle.dirName}`);
console.log(`The file name is ${rectangle.fileName}`);

const circle = require('./circle');
console.log(`The area of circle with radius = 5 is ${circle.area(5)}`);
console.log(`The circumference of circle with radius = 5 is ${circle.circumference(5)}`);