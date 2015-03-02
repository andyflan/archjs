var Arch_Controller = function() {
	//declare some properties
	this.element 	= null;
	this.app 		= null;

	//this gets called in the controller creation script. Call manually if creating manually
	this.doInit = function() {
		//call init and attach events if they exist
		if (typeof this.init === 'function') this.init();
		if (typeof this.attachEvents === 'function') this.attachEvents();
	}
};