import { App, Modal, Setting } from "obsidian";
import { default as MyPlugin } from './../../main';

export class KindleModal extends Modal {

	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app);
		this.plugin = plugin;
	}

	onOpen() {
		const { contentEl } = this;
		// contentEl.setText('Woah!');

		contentEl.createEl("h1", { text: "Kindle" });

		new Setting(contentEl).setName("Region").addText((text) =>
			text.setValue("spain").onChange((value) => {
				// this.linkText = value;
			})
		);

		new Setting(contentEl).setName("Link URL").addText((text) =>
			text.setValue("this.linkUrl").onChange((value) => {
				// this.linkUrl = value;
			})
		);

		new Setting(contentEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));

		new Setting(contentEl).addButton((btn) => btn
			.setButtonText("Cerrar")
			.setCta()
			.onClick(() => {
				this.close();
				// this.onSubmit(this.linkText, this.linkUrl); 
			})
		);
	}

	onClose() {
		console.log("cerrando");
		const { contentEl } = this;
		contentEl.empty();
	}
}
