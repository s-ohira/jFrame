/**
 * Iterator like Java copyrights by Sun Microsystems(c)
 * 
 * @author Seiji OHIRA
 * 
 * Freely distributable under MIT-style license.
 */
function iterator() {
	/** prototype */
	var proto = {
		list : [],
		length : 0,
		current : 0
	};

	/**
	 * set properties
	 * 
	 * @param list
	 */
	proto.init = function(list) {
		proto.list = list;
		proto.length = list.length;
	};

	/**
	 * return this is iteratable
	 * 
	 * @return canNext
	 */
	proto.hasNext = function() {
		return proto.current < proto.length;
	};

	/**
	 * get next element
	 * 
	 * @return next element
	 */
	proto.next = function() {
		proto.current += 1;
		return proto.list[proto.current - 1];
	};

	return $jf.bless(proto, arguments.callee.toString());
};
