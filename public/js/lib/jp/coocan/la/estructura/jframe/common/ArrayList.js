/**
 * List like ArrayList like Java copyrights by Sun Microsystems(c)
 * 
 * @author Seiji OHIRA
 * 
 * Freely distributable under MIT-style license.
 */
function arrayList() {
	/** prototype */
	var L = function() {
	};

	L.prototype = Array.prototype;

	/**
	 * set properties
	 * 
	 * @param list
	 */
	L.get = function() {
		return this[i];
	};

	L.prototype.iterator = function() {
		var iter = iterator();
		iter.init(this);
		return iter;
	};

	L.prototype.isArray = function() {
		return false;
	};

	var obj = new L;
	return obj;
};
