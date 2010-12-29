/**
 * view base
 * 
 * @author Seiji OHIRA
 * 
 * Freely distributable under MIT-style license.
 */
function view() {
	/** prototype */
	var proto = {};

	// properties below

	/**
	 * Dependency Injection model instance to View and HTML elements to Model
	 * 
	 * @param model
	 */
	proto.init = function(model) {
		// DI Model instance
		for ( var prop in this) {
			if (this.hasOwnProperty(prop) && prop.match(/^set.*Model$/)
					&& this[prop].isFunction()) {
				var pre = prop.replace(/^(set)(.)(.*?)(Model)$/, '$2');
				var suf = prop.replace(/^(set)(.)(.*?)(Model)$/, '$3$4');
				var modelName = pre.toLowerCase() + suf;
				this[prop]($jf.global[modelName]());
			}
		}

		// DI jQuery object
		for ( var name in model) {
			for ( var elem in model[name]) {
				this[name][elem] = $(model[name][elem]);
			}
		}
	};
	return $jf.bless(proto, arguments.callee.toString());
};
