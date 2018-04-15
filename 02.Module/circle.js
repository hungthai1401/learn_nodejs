// Wrapper to PI in class Math
const {PI} = Math;

module.exports = {
    area: (radius) => {
        return PI * radius * radius;
    },
    circumference: (radius) => {
        return 2 * PI * radius;
    }
}