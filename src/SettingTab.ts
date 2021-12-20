import { App, PluginSettingTab} from 'obsidian';
import { default as MyPlugin } from '../main';
import { KindleModal } from './kindle/KindleModal';


export const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export interface MyPluginSettings {
	mySetting: string;
}


export class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		new KindleModal(this.plugin.app, this.plugin).open();
	}
}


