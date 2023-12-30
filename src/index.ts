
interface ICLIInput {
  argv: Array<string>
}

class CLIInput implements ICLIInput {
  argv: Array<string>

  constructor(argv: Array<string>) {
    this.argv = argv
  }
}

console.log(new CLIInput(process.argv).argv)

