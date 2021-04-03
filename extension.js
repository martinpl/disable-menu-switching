const Main = imports.ui.main;

class Extension 
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

function init() {
	return new Extension();
}