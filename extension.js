const Main = imports.ui.main;

class Extension 
{
	enable() {
		Main.panel._oldChangeMenu = Main.panel.menuManager._changeMenu;
		Main.panel.menuManager._changeMenu = () => {};
	}

	disable() {
		Main.panel.menuManager._changeMenu = Main.panel._oldChangeMenu;
	}
}

function init() {
	return new Extension();
}