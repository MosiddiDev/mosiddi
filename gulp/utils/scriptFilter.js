var path = require('path'); //Node.js path module

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {
    return /(\.(js)$)/i.test(path.extname(name));
};
