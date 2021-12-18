import { Plugin, Notice} from 'obsidian';

export module MyRibbon {
	export function add( plugin:Plugin ){

		/**
		 * This creates an icon in the left ribbon.
		 * https://forum.obsidian.md/t/list-of-available-icons-for-component-seticon/16332/4
		 */
		const ribbonIconEl = plugin.addRibbonIcon('dice', 'Olagato Plugin', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			new Notice('Olagato33\'s plugin!');
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');

	}

}
