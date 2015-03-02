var Arch_Controller_Reveal = arch.Controller({
	init: function() {
		console.log('INIT REVEAL');
	},

	attachEvents: function() {
		console.log('EVENTS REVEAL');
	},

	ready: function() {
		console.log('EVENTS REVEAL');
	}
});

arch.registerController('Arch_Controller_Reveal');