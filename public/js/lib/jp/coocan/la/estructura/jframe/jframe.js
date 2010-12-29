/**
 * framework main
 * 
 * @author Seiji OHIRA
 * 
 * <pre>
 * Freely distributable under MIT-style license.
 * and Thanks to kogaidan, jdg
 * </pre>
 */
function jframe() {
	/** prototype */
	var proto = {};

	/**
	 * initialize ajax application
	 */
	proto._init = function() {
		$.getJSON(confUrl, {}, function(json, data) {
			for ( var view in json) {
				$jf[view] = $jf.global[view]();
				if (!$jf[view].isa('view')) {
					continue;
				}
				for ( var elem in json[view].attribute) {
					for ( var attr in json[view].attribute[elem]) {
						var method = json[view].attribute[elem][attr];
						$(elem).bind(
								attr,
								{
									'view' : $jf[view],
									'method' : method
								},
								function(event) {
									event.data.view[event.data.method](
											event.data.view, $(event.target));
								});
					}
				}
				$jf[view].init(json[view].property);
			}
		});
	};

	/**
	 * constructer emuration
	 * 
	 * @param proto
	 * @param callee
	 * @return instance
	 */
	proto.bless = function(proto, callee) {
		var F = function() {
		};
		var list = arrayList();
		list.push($jf.getFuncName(callee));
		F.prototype = proto;
		F.prototype.jf = {
			instance : list
		};
		F.prototype.isa = function(str) {
			var iter = this.jf.instance.iterator();
			while (iter.hasNext()) {
				if (iter.next() === str) {
					return true;
				}
			}
		};

		var obj = new F;
		return obj;
	};

	/**
	 * extends emuration
	 * 
	 * @param proto
	 * @param callee
	 * @return inherited instance
	 */
	proto.extend = function(obj, callee) {
		obj.jf.instance.push($jf.getFuncName(callee));
		return obj || {
			jf : {
				instance : [ 'Object' ]
			}
		};
	};

	/**
	 * Universal::isa on Perl emuration
	 * 
	 * @param str
	 * @return boolearn: is it object or ancestor of str
	 */
	proto.isa = function(str) {
		var iter = this.jf.instance.iterator();
		while (iter.hasNext()) {
			if (iter.next() === str) {
				return true;
			}
		}
		return false;
	};

	/**
	 * create function name from callee by regexp
	 */
	proto.getFuncName = function(callee) {
		if (!callee) {
			return 'Object';
		}
		var match = callee.match(/(function\s*)(.+?)(\s*\()/);
		return match[2];
	};

	var F = function() {
	};
	F.prototype = proto;
	var obj = new F;
	obj.jf = {
		instance : [ obj.getFuncName(arguments.callee.toString()) ]
	};
	return obj;
};

/** application container */
var $jf;

$jf = jframe();
$jf.global = this;

