import { MyCommands }  from './src/MyCommands';
import { MyRibbon }    from './src/MyRibbon';
import { MyStatusBar } from './src/MyStatusBar';
import { MyEvents }    from './src/MyEvents';
import { Plugin }      from 'obsidian';
import { MyPluginSettings, DEFAULT_SETTINGS, SampleSettingTab } from './src/SettingTab';

export default class MyPlugin extends Plugin {
	settings:    MyPluginSettings;
	myStatusBar: MyStatusBar;
	myRibbon:    MyRibbon;
	myCommands:  MyCommands;
	myEvents:    MyEvents;

	async onload() {
		await this.loadSettings();

		this.myStatusBar = new MyStatusBar(this);
		this.myRibbon    = new MyRibbon(this);
		this.myCommands  = new MyCommands(this);
		this.myEvents    = new MyEvents(this);

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab( new SampleSettingTab(this.app, this) );
	}

	onunload() {
		console.log('unloading Olagato\'s plugin');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData( this.settings );
	}
}
