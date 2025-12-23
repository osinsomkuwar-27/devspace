const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");

yargs(hideBin(process.argv))
  .command("init", "Initialize the backend service", {}, initRepo)
  .command("add <file>", "Add a file to the repository", {}, addRepo)
  .demandCommand(1, "You need atleast one command before moving on")
  .help().argv;
