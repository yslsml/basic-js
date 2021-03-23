//const CustomError = require("../extensions/custom-error");

//const { fake } = require("sinon");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if(!sampleActivity || typeof(sampleActivity) != 'string') return false;
    let num = parseFloat(sampleActivity);
    if (!num || isNaN(num) || num < 0 || num > MODERN_ACTIVITY) return false;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY/num)/k);
    return t;
};
