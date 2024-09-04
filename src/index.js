
const type = require('../src/api/type')
module.exports =  function clone(source) {
    const t = type(source);

    if (t !== 'object' || source === null) {
        return source;
    }

    let target;

    if (Array.isArray(source)) {
        target = [];
        for (let i = 0; i < source.length; i++) {
            target[i] = clone(source[i]);
        }
    } else {
        target = {};
        for (let i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = clone(source[i]);
            }
        }
    }

    return target;
}