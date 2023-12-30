"use strict";
class CLIInput {
    constructor(argv) {
        this.argv = argv;
    }
}
console.log(new CLIInput(process.argv).argv);
