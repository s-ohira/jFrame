/**
 * calculator Model
 * 
 * @author Seiji OHIRA
 * @return instance
 */
function calcModel() {
	/** parent instance */
	var proto = $jf.extend(model(), arguments.callee.toString());
	/** left operand */
	proto.left = 0;
	/** right operand */
	proto.right = 0;
	/** if treat right operand then return true */
	proto.isRight = false;
	/** if treat float not but integer then return true */
	proto.isFloat = false;
	/** operater */
	proto.operater = null;

	/**
	 * exec calculation
	 */
	proto.equal = function() {
		if ('+' === this.operator) {
			return this.add();
		} else if ('+' === this.operator) {
			return this.reduce();
		} else if ('-' === this.operator) {
			return this.reduce();
		} else if ('*' === this.operator) {
			return this.multiply();
		} else if ('/' === this.operator) {
			return this.devide();
		}
	};

	/**
	 * set operator add flag
	 */
	proto.add = function() {
		return this.left + this.right;
	};

	/**
	 * set operator refuce flag
	 */
	proto.reduce = function() {
		return this.left - this.right;
	};

	/**
	 * set operator multiply flag
	 */
	proto.multiply = function() {
		return this.left * this.right;
	};

	/**
	 * set operator devide flag
	 */
	proto.devide = function() {
		if (0 === this.right) {
			return;
		}
		return this.left / this.right;
	};

	return proto;
};
