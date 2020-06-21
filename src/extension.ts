// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const baseUrl = "https://www.typescriptlang.org/docs/home.html";
	const whatsNewUrl = "https://www.typescriptlang.org/docs/handbook/release-notes/overview.html";
	const handbookUrl = "https://www.typescriptlang.org/docs/handbook/basic-types.html";
	const tutorialUrl = "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html";

	const baseView = vscode.commands.registerCommand('typescript-docs.typeScriptDocs', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl));
	});
	context.subscriptions.push(baseView);

	const tutorialView = vscode.commands.registerCommand('typescript-docs.typeScriptDocsTutorials', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(tutorialUrl));
	});
	context.subscriptions.push(tutorialView);

	const whatsNewView = vscode.commands.registerCommand('typescript-docs.typeScriptDocsWhatsNew', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(whatsNewUrl));
	});
	context.subscriptions.push(whatsNewView);

	const handbookView = vscode.commands.registerCommand('typescript-docs.typeScriptDocsHandbook', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(handbookUrl));
	});
	context.subscriptions.push(handbookView);
}

// this method is called when your extension is deactivated
export function deactivate() {}
