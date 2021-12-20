
import { KindleModal } from './kindle/KindleModal';
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
			id: 'open-modal-Kindle',
			name: 'Olagato Open Kindle',
			callback: () => {
				new KindleModal(this.plugin.app, this.plugin).open();
			}
		});
	}
}
