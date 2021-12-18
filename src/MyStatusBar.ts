import { default as MyPlugin } from './../main';

export class MyStatusBar {
	plugin: MyPlugin;

	constructor(plugin: MyPlugin) {
		this.plugin = plugin;
		this.init();
	}

	init(): void {
		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.plugin.addStatusBarItem();
		statusBarItemEl.setText('Olagato4');
	}
}
