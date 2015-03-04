var Arch_Controller = function() {
	//declare some properties
	this.element 	= null;
	this.app 		= null;

	//this gets called in the controller creation script. Call manually if creating manually
	this.doInit = function() {
		//call init and attach events if they exist
		if (typeof this.init === 'function') this.init();
    this.map_events();
		if (typeof this.attachEvents === 'function') this.attachEvents();
	}

  this.map_events = function(){
    for(var prop in this){
      if (prop.indexOf(' ') >= 0) {
        var trigger = prop.substring(0, prop.lastIndexOf(' '));
        var handle = prop.substring(prop.lastIndexOf(' '), prop.length);

        $(this.element).on(handle, trigger, this[prop]);
      }
    }
  }
};