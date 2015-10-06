/**
 *
 * Plugin: jQuery.removeData
 * Source: github.com/howlingmad/jQuery.removeData
 * Author: Alex Kilgour
 * Version: 1.0.0
 *
 * Extends jQuery's removeData method
 *
 */

(function($) {
	var oldRemoveData = $.fn.removeData;
	$.fn.removeData = function(key, removeAttr) {
		// convert key values of type string to array
		if (typeof key === 'string') {
			key = key.split(' ');
		}

		if (typeof key !== 'undefined' && key && key.constructor === Array) {
			for (var i = 0, len = key.length; i < len; i++) {
				// remove data- if present
				if (key[i].substr(0, 5) === 'data-') {
					key[i] = key[i].substring(5);
				}

				// if true is set, also remove attribute from element
				if (removeAttr) {
					var $self = $(this);

					// remove from all matching elements
					$self.each(function() {
						$(this).removeAttr('data-' + key[i]);
					});
				}
			}
		}

		// original behavior, preserve context
		var original = oldRemoveData.apply(this, arguments);

		return original;
	};

})(jQuery);
