;(function (ns) {

	var PageMenu = function(holder, state, events) {
		this._holder = holder;
		this._state = state;
		this._events = events;

		this._controls = {};

		this._init();
	};

	PageMenu.prototype = {

		_init: function() {


		}
	};

	ns.PageMenu = PageMenu;

}(window.rossi || window));