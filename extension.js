import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class DisableMenuSwitchingExtension extends Extension
{
	enable() {
		this._oldChangeMenu = Main.panel.menuManager._changeMenu;
		Main.panel.menuManager._changeMenu = () => {};
	}

	disable() {
		Main.panel.menuManager._changeMenu = this._oldChangeMenu;
		this._oldChangeMenu = null;
	}
}
