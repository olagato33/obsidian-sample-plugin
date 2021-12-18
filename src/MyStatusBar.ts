import { Plugin} from 'obsidian';

export module MyStatusBar {
	export function add( plugin:Plugin ){

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = plugin.addStatusBarItem();
		statusBarItemEl.setText('Olagatoo');

	}

}
