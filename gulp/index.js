var fs = require('fs'); // Node.js File Stream helper module
var scriptFilter = require('./utils/scriptFilter'); // Custom Script filter function
var tasks = fs.readdirSync('./gulp/tasks/').filter(scriptFilter); // Read in file names of directory (Only scripts)

// Import in all tasks (task/*.js files)
tasks.forEach(function(task) {
	require('./tasks/' + task);
});
