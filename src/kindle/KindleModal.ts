import { App, Modal, Setting } from "obsidian";

export class KindleModal extends Modal {
	constructor(app: App) {
		super(app);
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
