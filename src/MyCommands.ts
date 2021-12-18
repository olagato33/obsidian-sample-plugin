
import { Editor, MarkdownView} from 'obsidian';
import { SampleModal } from './SampleModal';
import { default as MyPlugin } from './../main';

export class MyCommands {
	plugin: MyPlugin;

	constructor(plugin: MyPlugin) {
		this.plugin = plugin;
		this.init();
	}

	init(): void {
		// This adds a simple command that can be triggered anywhere
		this.plugin.addCommand({
			id: 'open-sample-modal-simple',
			name: 'Olagato Open sample modal (simple)',
			callback: () => {
				new SampleModal(this.plugin.app).open();
			}
		});
		// This adds an editor command that can perform some operation on the current editor instance
		this.plugin.addCommand({
			id: 'sample-editor-command',
			name: 'Olagato LIPSUM',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				editor.replaceSelection('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
			}
		});
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.plugin.addCommand({
			id: 'open-sample-modal-complex',
			name: 'Olagato Open sample modal (complex)',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.plugin.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new SampleModal(this.plugin.app).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});
	}
}
