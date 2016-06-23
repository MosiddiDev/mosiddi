// Build and Server configuration file
module.exports = {
  mainJsInput: './App/scripts/app.js', // Main js source file (inherently includes other js file)
  mainJsOutput: 'app.js', // Main Js generated file
  stylePattern: [
      './App/style/*.css',
      './node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  resourcePattern: [
      './App/resources/*',
      './App/resources/**/*'
  ],
  fontsPattern: './node_modules/bootstrap/dist/fonts/*',
  buildFolder: './build/', // Build destination directory
  indexHtml: './App/index.html', // Main index html source
  serverIndex: './build/', // Root directory for the server to serve
  watchedFiles: [ // Watched files, when changed triggers a rebuild
    './App/*.html',
    './App/**/*',
    './App/**/**/*'
  ]
};
