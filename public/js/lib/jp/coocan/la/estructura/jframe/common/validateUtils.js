/**
 * JS Validation functions
 * 
 * @author Seiji OHIRA
 * 
 * Freely distributable under MIT-style license.
 */
var validateUtils = function() {
	/**
	 * 
	 */
	this.require = function($param) {
		if (null == $param || '' === $param) {
			return false;
		}
		return true;
	};

	/**
	 * 
	 */
	this.isNumeric = function($param) {
		if (!$param.match(/^[0-9]+$/)) {
			return false;
		}
		return true;
	};

	/**
	 * 
	 */
	this.isAlpha = function($param) {
		return $param.match(/^[a-zA-Z]+$/);
	};

	/**
	 * 
	 */
	this.isAlphaNumeric = function($param) {
		return $param.match(/^[0-9a-zA-Z]+$/);
	};

	/**
	 * 
	 */
	this.isMin = function($param, $min) {
		if (null === $param) {
			return false;
		} else if ($param.length < $min) {
			return false;
		}
		return true;
	};

	/**
	 * 
	 */
	this.isMax = function($param, $max) {
		if (null === $param) {
			return false;
		} else if ($max < $param.length) {
			return false;
		}
		return true;
	};

	/**
	 * 
	 */
	this.isRange = function($param, $min, $max) {
		if (null === $param) {
			return false;
		} else if ($param.length < $min || $max < $param.length) {
			return false;
		}
		return true;
	};
};
