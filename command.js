import {program} from "commander";
import process from "node:process";

program
    .name('foonedio CLI')
    .requiredOption('-c, --command <string>', 'command file name')
    .parse(process.argv);

await import(`./src/command/${program.opts().command}.command.js`).then(function(method) {
    method.execute()
});