import { MyCommands } from './src/MyCommands';
import { MyRibbon } from './src/MyRibbon';
import { MyStatusBar } from './src/MyStatusBar';
import { Plugin } from 'obsidian';
import { MyPluginSettings, DEFAULT_SETTINGS, SampleSettingTab } from './src/SettingTab';

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;
	myStatusBar: MyStatusBar;
	myRibbon: MyRibbon;
	myCommands: MyCommands;

	async onload() {
		await this.loadSettings();

		this.myStatusBar = new MyStatusBar(this);
		this.myRibbon = new MyRibbon(this);
		this.myCommands = new MyCommands(this);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		console.log('unloading Olagato\'s plugin');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
