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
		var keyData;
		var keyNoData;

		// get key name with and without data-
		if (key.substr(0, 5) !== 'data-') {
			keyData = 'data-' + key;
			keyNoData = key;
		} else {
			keyData = key;
			keyNoData = key.substring(5);
			key = keyNoData; // jQuery method requires key without data-
		}

		// original behavior, preserve context
		var ret = oldRemoveData.apply(this, arguments);

		// if true is set, also remove attribute from element
		if (removeAttr) {
			var $self = $(this);
			
			// remove from all matching elements
			$self.each(function() {
				$(this).removeAttr(keyData);
			});
		}

		return ret;
	};

})(jQuery);
