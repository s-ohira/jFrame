/**
 * calculator view
 * 
 * @author Seiji OHIRA
 * @return instance
 */
function calcView() {
	/** parent instance */
	var proto = $jf.extend(view(), arguments.callee.toString());

	/** Model instance */
	proto.calcModel;

	/**
	 * Model mutator
	 * 
	 * @param model
	 */
	proto.setCalcModel = function(calcModel) {
		this.calcModel = calcModel;
	};

	// properties below

	// attributes below
	/**
	 * event listner called when number buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonNum = function(self, elem) {
		var display = self.calcModel.display;

		var num = display.html();
		if ('0' === num) {
			display.html(elem.attr('value'));
		} else {
			display.html(num + elem.attr('value'));
		}
	};

	/**
	 * event listner called when dot buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonDot = function(self, elem) {
		var display = self.calcModel.display;

		if (!self.calcModel.isFloat) {
			var num = display.html();
			display.html(num + elem.attr('value'));
		}

		self.calcModel.isFloat = true;
	};

	/**
	 * event listner called when equal buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonEqual = function(self, elem) {
		var display = self.calcModel.display;
		if (!self.calcModel.isRight) {
			return;
		}
		self.calcModel.right = Number(display.html());
		self.calcModel.isRight = false;
		self.calcModel.isFloat = false;
		display.html(self.calcModel.equal());
	};

	/**
	 * event listner called when add buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonAdd = function(self, elem) {
		var display = self.calcModel.display;

		self.calcModel.operator = '+';
		self.calcModel.isRight = true;
		self.calcModel.left = Number(display.html());
		display.html(0);
	};

	/**
	 * event listner called when reduce buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonReduce = function(self, elem) {
		var display = self.calcModel.display;
		self.calcModel.operator = '-';
		self.calcModel.isRight = true;
		self.calcModel.left = Number(display.html());
		display.html(0);
	};

	/**
	 * event listner called when multiply buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonMulti = function(self, elem) {
		var display = self.calcModel.display;

		self.calcModel.operator = '*';
		self.calcModel.isRight = true;
		self.calcModel.left = Number(display.html());
		display.html(0);
	};

	/**
	 * event listner called when devide buttun pressed
	 * 
	 * @param eventObject
	 */
	proto.onClickButtonDevide = function(self, elem) {
		var display = self.calcModel.display;

		self.calcModel.operator = '/';
		self.calcModel.isRight = true;
		self.calcModel.left = Number(display.html());
		display.html(0);
	};

	return proto;
};
