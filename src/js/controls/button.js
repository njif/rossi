;(function (ns, $) {

	var PageButton = function(holder, state, events) {
		this._holder = holder;
		this._state = state;
		this._events = events;

		this._init();
	};

	PageButton.prototype = {

		_init: function() {

			var state = this._state,
				holder = this._holder,
				events = this._events,
				keys = Object.keys(events),
				count = keys.length,
				val, i,
				ev;

			for (i = 0; i < count; i++)
			{
				ev = (function() { return events[keys[i]]; })();
				holder.on(keys[i], function() {
					state.raise(ev);
				});
			}
		}
	};

	ns.PageButton = PageButton;

}(window.rossi || window, jQuery));