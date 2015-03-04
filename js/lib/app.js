var Arch_App = function(element) {
	this.controllers = {};

	//if there's no element then attach to the window
	this.element = (!element || (element == null) || (typeof element === 'undefined')) ? window : element;

	/*
	 *	initialise the app object
	 */

	this.init = function() {
		var that = this;

		console.log('Init app');

		$(function() {
			that.initialiseControllers();
		});
	}

	/*
	 * 	register a new controller for auto creation
	 */

	this.registerController = function(controller) {
		this.controllers[this._getIdentifierFromControllerName(controller)] = [];

		return this;
	}

	/*
	 * Create a new controller
	 *
	 * Example:
	 *	var Arch_Controller_Mycontroller = arch.Controller({
	 *		this.init = function() {
	 *			//initialisation here (assign varibles etc)
	 * 		}
	 *
	 *		this.attachEvents = function() {
	 *			//do event attachment in here this.find('myelement').on(...);
	 * 		}
	 *
	 *		this.ready = function() {
	 *			//
	 * 		}
	 *	});
	 */

	this.Controller = function(controller) {
		var new_object = $.extend({}, new Arch_Controller(), controller);

		return function(element, options) {
			new_object.element = element;
			new_object.options = options;

			return new_object;
		}
	}

	/*
	 *
	 */

	this.makeController = function(type, element, options) {
        var controller;

        options = (typeof options === 'undefined' || options === null) ? {} : options;
        options = $.extend({}, options);

        controller = new window[this._getControllerNameFromIdentifier(type)](element, options);

        controller.doInit();

        controller.app = this;

        this.controllers[type].push(controller);

        return controller;
    }

    /*
	 * 	Iterate over components and create them
	 */

	this.initialiseControllers = function() {
		var that = this;

    for (var controller_name in this.controllers) {
        $('[data-component=' + controller_name + ']').each(function(index, element) {
            that.makeController(controller_name, element);
        });
    }

    return this;
	}

	this._getIdentifierFromControllerName = function(controller_name) {
		return controller_name.split("_")[2].toLowerCase();
	}

	this._getControllerNameFromIdentifier = function(identifier) {
		return 'Arch_Controller_' + identifier.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	this.init();
};

//create the arch app object
var arch = new Arch_App();
