const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
  .command("init", "Initialize the backend service", {}, initRepo)
  .command(
    "add <file>",
    "Add a file to the repository", 
    (yargs) => { 
      yargs.positional("file", { 
        describe: "File to add to the staging area", 
        type: "string", 
      }); 
    }, 
    (argv) => {
      addRepo(argv.file);
    }
  )
  .command(
    "commit <message>", 
    "Commit the staged files", 
    (yargs) => { 
      yargs.positional("message", { 
        describe: "Commit message", 
        type: "String", 
      }); 
    }, 
    (argv) => {
      commitRepo(argv.message);
    }
  )
  .command("push", "Push commits to S3", {}, pushRepo)
  .command("pull", "Pull commits from S3", {}, pullRepo)
  .command(
    "revert <commitID>",
    "Revert to a specific commit",
    (yargs) => {
      yargs.positional("commitID", {
        describe: "Commit ID to revert to",
        type: "string",
      });
    },
    revertRepo
  )
  .demandCommand(1, "You need atleast one command before moving on")
  .help().argv;
