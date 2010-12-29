/**
 * JavaScript extender like Perl, Java copyrights by Sun Microsystems(c)
 * 
 * @author Seiji OHIRA
 * 
 * Freely distributable under MIT-style license.
 */


///**
// * return true at case that param is own member
// * 
// * @param param
// * @return boolean
// */
//Object.prototype.exists = function(param) {
//	return this.hasOwnProperty(param);
//};

///**
// * return true at case that this is Object
// * 
// * @return boolean
// */
//Object.prototype.isObject = function() {
//	return true;
//};

///**
// * return false in anytime
// * 
// * @return boolean
// */
//Object.prototype.isFunction = function() {
//	return false;
//};

///**
// * return false in anytime
// * 
// * @return boolean
// */
//Object.prototype.isArray = function() {
//	return false;
//};

///**
// * return false in anytime
// * 
// * @return boolean
// */
//Object.prototype.isNumber = function() {
//	return false;
//};

///**
// * return false in anytime
// * 
// * @return boolean
// */
//Object.prototype.isString = function() {
//	return false;
//};

///**
// * return false in anytime
// * 
// * @return boolean
// */
//Object.prototype.isRegExp = function() {
//	return false;
//};

/**
 * return true at case that this is Function
 * 
 * @return boolean
 */
Function.prototype.isFunction = function() {
	return true;
};

/**
 * return true at case that this is Array
 * 
 * @return boolean
 */
Array.prototype.isArray = function() {
	return true;
};

/**
 * return true at case that this is String
 * 
 * @return boolean
 */
Number.prototype.isNumber = function() {
	return true;
};

/**
 * return true at case that this is String
 * 
 * @return boolean
 */
String.prototype.isString = function() {
	return true;
};

/**
 * return true at case that this is RegExp
 * 
 * @return boolean
 */
RegExp.prototype.isRegExp = function() {
	return true;
};

//oops this disgust jQuery... 
///**
// * return obj2string
// * 
// * @return str
// */
//
//Object.prototype.toString = function() {
//	var str = '{\n';
//	var len = this.length;
//	for ( var i in this) {
//		if (null === this[i]) {
//			str += i + ': null';
//		} else if (!this.exists(i)) {
//			continue;
//		} else if (this[i].isObject) {
//			if (this[i].isFunction()) {
//				continue;
//			}
//			str += '    ' + i + ': ' + this[i].toString() + ',\n';
//		} else {
//			str += '    ' + i + ': ' + this[i] + ',\n';
//		}
//	}
//	str += '}';
//	return str;
//};

// oops this disabled arguments.callee.toString()...
// /**
// * return none
// *
// * @return null
// */
// Function.prototype.toString = function() {
// return this;
// };

/**
 * return ary2string
 * 
 * @return str
 */
Array.prototype.toString = function() {
	var str = '[\n';
	var len = this.length;
	for ( var i = 0; i < len; i++) {
		str += '    ' + this[i] + ',\n';
	}
	str += ']';
	return str;
};

/**
 * return num2string
 * 
 * @return str
 */
Number.prototype.toString = function() {
	return '' + this;
};

/**
 * return self
 * 
 * @return null
 */
String.prototype.toString = function() {
	return this;
};

/**
 * return regexp2string
 * 
 * @return null
 */
RegExp.prototype.toString = function() {
	return '' + this;
};
