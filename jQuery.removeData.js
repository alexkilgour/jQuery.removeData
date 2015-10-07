/**
 *
 * Plugin: jQuery.removeData
 * Source: github.com/howlingmad/jQuery.removeData
 * Author: Alex Kilgour
 * Version: 2.0.0
 *
 * Extends jQuery's removeData method
 *
 */

(function($) {
	var oldRemoveData = $.fn.removeData;
	$.fn.removeData = function(keys, options) {
		// convert values of type string to array
		if (keys && typeof keys === 'string') {
			keys = keys.split(' ');
		}
		if (options && options.values === '') {
			options.values = [''];
		} else if (options && options.values && typeof options.values === 'string') {
			options.values = options.values.split(' ');
		}

		// do we have a valid set of keys
		if (typeof keys !== 'undefined' && keys && keys.constructor === Array) {
			var $self = $(this);
			var removeKeys = new Array();
			var attrValues = new Array();

			// update keys based on options
			for (var i = 0, len = keys.length; i < len; i++) {
				// remove data- if present
				if (keys[i].toString().substr(0, 5) === 'data-') {
					keys[i] = keys[i].toString().substring(5);
				}

				// store keys in data- format for attribute removal
				attrValues.push('data-' + keys[i].toString());
				// only remove if value matches
				if (options && options.values && options.values.constructor === Array) {
					if (typeof $self.data(keys[i]) !== 'undefined' && typeof options.values[i] !== 'undefined' && options.values[i] !== null) {
						if ($self.data(keys[i]) !== options.values[i]) {
							removeKeys.push(keys[i]);
						}
					}
				}
			}

			// remove keys stored from value matching
			for (var i = 0, len = removeKeys.length; i < len; i++) {
				var position = keys.indexOf(removeKeys[i]);
				if(position != -1) {
					keys.splice(position, 1);
					attrValues.splice(position, 1);
					options.values.splice(position, 1);
					removeKeys.splice(position, 1);
				}
			}

			// if removeAttr is true, also remove attribute(s) from element
			if (options && options.removeAttr && typeof options.removeAttr === 'boolean') {
				attrValues = attrValues.join(' ');
				// remove from all matching elements
				$self.each(function() {
					$(this).removeAttr(attrValues);
				});
			}
		}

		// original behavior to remove data cache, preserve context
		var original = oldRemoveData.apply(this, arguments);

		return original;
	};

})(jQuery);
