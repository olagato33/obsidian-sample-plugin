import { Notice} from 'obsidian';
import { default as MyPlugin } from './../main';
import { KindleModal } from './kindle/KindleModal';

export class MyRibbon {
	plugin: MyPlugin;

	constructor(plugin: MyPlugin) {
		this.plugin = plugin;
		this.init();
	}

	init(): void {
		/**
		 * This creates an icon in the left ribbon.
		 * https://forum.obsidian.md/t/list-of-available-icons-for-component-seticon/16332/4
		 */
		 const ribbonIconEl = this.plugin.addRibbonIcon('dice', 'Olagato Plugin', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			// new Notice('Olagato33\'s yeee!');
			new KindleModal(this.plugin.app, this.plugin).open();
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');
	}
}
