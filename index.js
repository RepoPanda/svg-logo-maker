// main entry point for the application and will call the command line interface (CLI) class to start the application.
const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();