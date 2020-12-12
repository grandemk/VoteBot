import { CommandLineStringParameter, CommandLineParser } from "@rushstack/ts-command-line";

export class MainCommandLine extends CommandLineParser {
    public token: CommandLineStringParameter;
    public constructor() {
        super({
            toolFilename: "main",
            toolDescription: 'commandline'
        });
    }

    protected onDefineParameters(): void {
        this.token = this.defineStringParameter({
            argumentName: "TOKEN",
            parameterLongName: "--token",
            parameterShortName: "-t",
            description:"Token to access the discord"
        });
    }
}
const commandLine = new MainCommandLine();
commandLine.execute().then(() => {
    console.log("The token is " + commandLine.getStringParameter("--token").value);
});