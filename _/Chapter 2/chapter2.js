function argumentCount() {
	function hello(name) {
		if (_.isString(name)) {
			return 'hello, ' + name;
		}
	}

	return {
		arg: hello('world'),
		noarg: hello()
	};
}

function argumentShift() {
	function hello(greeting, person) {
		if (_.isPlainObject(greeting)) {
			person = greeting;
			greeting = 'hi, ';
		}
		return greeting + person.name;
	}

	return {
		both: hello('hello, ', { name: 'Dillan' }),
		object: hello({ name: 'Danielle' })
	};
}

function arithmetic() {
	var operand1 = 1/0,
		operand2 = NaN,
		results = [];

	_.forEach([ operand1, operand2 ], function(op) {
		if (_.isFinite(op)) {
			results.push('operand 1 is finite');
		} else {
			if (!_.isNumber(op) || _.isNaN(op)) {
				results.push(op.toString() + ' is not a number');
			} else {
				results.push('Infinity cannot be used here');
			}
		}
	});

	return results;
}

function callable() {
	var object = {
		a: function() { return 'ret'; },
		b: []
	};

	return {
		a: _.isFunction(object.a) && object.a(),
		b: _.isFunction(object.b) && object.b()
	}
}

function assign() {
	var object = {
		name: 'Jeremy',
		age: 42
	};

	return _.assign(object, {
		occupation: 'Programmer'
	});
}

function assignMultiple() {
	var object1 = {
			name: 'Jenny',
			age: 27
		},
		object2 = {
			age: 31
		},
		object3 = {
			occupation: 'Neurologist'
		};

	return _.assign(object1, object2, object3);
}

function merge() {
	var object1 = {
			states: { running: 'poweroff' },
			names: [ 'CentOS', 'REHL' ]
		},
		object2 = {
			states: { off: 'poweron' },
			names: [ 'Ubuntu', 'Debian' ]
		};

	return _.merge(object1, object2, function(dest, src) {
		if (_.isArray(dest) && _.isArray(src)) {
			return dest.concat(src);
		}
	});
}

function defaults() {
	var object = {
		name: 'George'
	};

	return _.defaults(object, {
		name: '',
		age: 0,
		occupation: ''
	});
}

function findKey() {
	var object = {
		name: 'Gene',
		age: 43,
		occupation: 'System Administrator'
	};

	return _.findKey(object, function(value) {
		return value === 'Gene';
	});	
}

function findKeyShorthands() {
	var object = {
		programmers: {
			Keith: 'C',
			Marilyn: 'JavaScript'
		},
		designers: {
			Lori: 'CSS',
			Marilyn: 'HTML'
		}
	};

	return _.findKey(object, { Marilyn: 'JavaScript' });
}

function findKeyArray() {
	var object = {
		Maria: [
			'Python',
			'Lisp',
			'Go'
		],
		Douglas: [
			'CSS',
			'Clojure',
			'Haskell'
		]
	}, lang = 'Lisp';

	return _.findKey(object, function(value) {
		if (_.isArray(value)) {
			return _.contains(value, lang);
		} else {
			return value === lang;
		}
	});
}

function findPropertyValue() {
	var object = {
		8490: {
			first: 'Arthur',
			last: 'Evans',
			enabled: false
		},
		7035: {
			first: 'Shirley',
			last: 'Rivera',
			enabled: false
		},
		4818: {
			first: 'William',
			last: 'Howard',
			enabled: true
		}
	};

	return {
		find: _.find(object, 'enabled'),
		where: _.where(object, { last: 'Rivera' })
	};
}

function forOwn() {
	var object = {
		name: 'Vince',
		age: 42,
		occupation: 'Architect'
	}, result = [];

	_.forOwn(object, function(value, key) {
		result.push(key + ': ' + value);
	});

	return result;
}

function forIn() {
	function Person() {
		this.full = function() {
			return this.first + ' ' + this.last;
		};
	}

	function Employee(first, last, occupation) {
		this.first = first;
		this.last = last;
		this.occupation = occupation;
	}

	Employee.prototype = new Person();

	var employee = new Employee('Theo', 'Cruz', 'Programmer'),
		resultOwn = [],
		resultIn = [];

	_.forOwn(employee, function(value, key) {
		resultOwn.push(key);
	});

	_.forIn(employee, function(value, key) {
		resultIn.push(key);
	});

	return {
		forOwn: resultOwn,
		forIn: resultIn
	};
}

function keys() {
	var object = {
		occupation: 'Optometrist',
		last: 'Lynch',
		first: 'Shari'
	};

	return _.sortBy(_.keys(object));
}

function keysOrdered() {
	var object = {
		occupation: 'Optometrist',
		last: 'Lynch',
		first: 'Shari'
	};

	return _.at(object, _.sortBy(_.keys(object)));
}

function values() {
	var object = {
		first: 'Hue',
		last: 'Burton',
		occupation: 'Horticulturalist'
	};

	return _.values(object);
}

function valuesOrdered() {
	var object = {
		Angular: { name: 'Patrick' },
		Ember: { name: 'Jane' },
		Backbone: { name: 'George' }
	};

	return _.sortBy(_.values(object), 'name');
}

function results() {
	var object1 = {
			name: 'Brian'
		},
		object2 = {
			name: function() {
				return 'Brian';
			}
		},
		object3 = {};

	return {
		name1: _.result(object1, 'name', 'Brian'),
		name2: _.result(object2, 'name', 'Brian'),
		name3: _.result(object3, 'name', 'Brian')
	};
}

function functions() {
	function Person(first, last) {
		this.first = first;
		this.last = last;
	}

	Person.prototype.name = function() {
		return this.first + ' ' + this.last;
	};

	return _.functions(new Person('Teresa', 'Collins'));
}

function pairs() {
	function format(label, value) {
		return label + ': ' + value;	
	}

	var object = {
		first: 'Katherine',
		last: 'Bailey',
		age: 33
	}, result = '';

	_.forEach(_.pairs(object), function(pair) {
		result += format.apply(null, pair) + '\n';
	});

	return result;
}

function pick() {
	var object1 = {
			name: 'Kevin Moore',
			occupation: 'Programmer'
		},
		object2 = {
			specialty: 'Python',
			employer: 'Acme'
		};

	return _.assign(object1, _.pick(object2, 'specialty'));
}

function omit() {
	var object1 = {
			name: 'Kevin Moore',
			occupation: 'Programmer'
		},
		object2 = {
			specialty: 'Python',
			employer: 'Acme'
		};

	return _.assign(object1, _.omit(object2, 'employer'));
}

function omitCallback() {
	var object = {
		name: 'Lois Long',
		age: 0,
		occupation: null
	};

	return _.omit(object, function(value) {
		return !(!_.isBoolean(value) && value);
	});
}

function invert() {
	function sortValues(object) {
		return _.values(object).sort();
	}

	var object1 = {
			first: 'Mathew',
			last: 'Johnson'
		},
		object2 = {
			first: 'Melissa',
			last: 'Willians'
		};

	return {
		object1: sortValues(object1),
		object2: sortValues(_.invert(object2))
	};
}

function create() {
	function Person() {}
	Person.prototype.name = function() {
		return this.first + ' ' + this.last;
	};

	var collection = [
			{ first: 'Jean', last: 'Flores' },
			{ first: 'Edward', last: 'Baker' },
			{ first: 'Jennifer', last: 'Walker' }
		],
		people = [];

	_.forEach(collection, function(item) {
		people.push(_.create(Person.prototype, item));
	});

	return _.invoke(people, 'name');
}

function clone() {
	function Person(first, last) {
		this.first = first;
		this.last = last;
	}

	var object1 = {
			first: 'Laura',
			last: 'Gray'
		},
		object2 = new Person('Bruce', 'Price'),
		clone1 = _.clone(object1),
		clone2 = _.clone(object2);

	return {
		clone1: clone1.first === 'Laura',
		clone2: clone2.first === 'Bruce' && clone2 instanceof Person
	};
}
