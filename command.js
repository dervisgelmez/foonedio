import {program} from "commander";
import process from "node:process";
import database from "./config/database.config.js";

program
    .name('foonedio CLI')
    .requiredOption('-c, --command <string>', 'command file name')
    .parse(process.argv);

await database.connect();
await import(`./src/command/${program.opts().command}.command.js`).then(function(method) {
    method.execute()
});