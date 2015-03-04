var Arch_Controller_Reveal = arch.Controller({
	init: function() {
		console.log('INIT REVEAL');
	},

	attachEvents: function() {
		console.log('EVENTS REVEAL');
	},

	ready: function() {
		console.log('EVENTS REVEAL');
	},

  "a click": function(){
    console.log('a clicks');
  },

  "a.not-normal click": function(){
    console.log('not normal clicks');
  }

});

arch.registerController('Arch_Controller_Reveal');