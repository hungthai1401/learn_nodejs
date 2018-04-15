// Arrow function
// exports.area = (width, height) => width * height;
// exports.circumference = (width, height) => 2 * (width + height);

// module.exports = {
//     area: (width, height) => width * height,
//     circumference: (width, height) => 2 * (width + height)
// }

module.exports = {
    // function
    area: (width, height) => {
        return width * height;
    },
    circumference: (width, height) => {
        return 2 * (width + height);
    },
    // property
    defaultDate: Date(),
    dirName: __dirname,
    fileName: __filename
}