function jqueryChain() {
	return $('body')
		.children()
		.first()
		.is('h1');
}

function lodashArray() {
	return _(['a', 'b', 'c'])
		.at([1, 2])
		.value();
}

function lodashObjectAndString() {
	return {
		object: _({a: 'b', c: 'd'})
			.contains('b'),
		string: _('abcd')
			.contains('b')
	};
}

function explicitChain() {
	return {
		implicit: _([3,2,1])
			.sort()
			.first(),
		explicit: _.chain([3,2,1])
			.sort()
			.first()
			.isNumber()
			.value()
	};
}

function filterPropertyAndCallback() {
	var collection = [
		{ name: 'Ellen', age: 20, enabled: true },
		{ name: 'Heidi', age: 24, enabled: false },
		{ name: 'Roy', age: 21, enabled: true },
		{ name: 'Garry', age: 23, enabled: false }
	];

	return _(collection)
		.filter('enabled')
		.filter(function(item) {
			return item.age >= 21;
		})
		.value();
}

function builtinCallbacksAndWhere() {
	var collection = [
		{ name: 'Janice', age: 38, gender: 'f' },
		{ name: 'Joey', age: 20, gender: 'm' },
		{ name: 'Lauren', gender: 'f' },
		{ name: 'Drew', gender: 'm' }
	];

	return _(collection)
		.where({ gender: 'f' })
		.filter(_.flow(_.property('age'), _.isFinite))
		.value();
}

function dropWhile() {
	var collection = [
		{ first: 'Dewey', last: 'Mills' },
		{ first: 'Charlene', last: 'Larson' },
		{ first: 'Myra', last: 'Gray' },
		{ first: 'Tasha', last: 'Malone' }
	];

	return _(collection)
		.sortBy('first')
		.dropWhile(function(item) {
			return _.first(item.first) < 'F';
		})
		.value();
}

function dropRightWhile() {
	var name = '  Donnie Woods   ',
		emptyString = _.partial(_.isEqual, ' ');

	return _(name)
		.toArray()
		.dropWhile(emptyString)
		.dropRightWhile(emptyString)
		.join('');
	
}

function takeWhile() {
	var collection = [
		{ name: 'Jeannie', grade: 'B+' },
		{ name: 'Jeffrey', grade: 'C' },
		{ name: 'Carrie', grade: 'A-' },
		{ name: 'James', grade: 'A' }
	];

	return _(collection)
		.sortBy('grade')
		.takeWhile(function(item) {
			return _.first(item.grade).toUpperCase() === 'A';
		})
		.value();
}

function takeRightWhile() {
	var collection = _.sample(_.range(1, 21), 10),
		total = 5,
		min = 10;

	return _(collection)
		.sortBy()
		.takeRightWhile(function(item, index, array) {
			return item >= min &&
				array.length - index <= total;
		})
		.value();
}

function rejectProperties() {
	var object = {
		first: 'Conrad',
		last: 'Casey',
		age: 37,
		enabled: true
	};

	return _(object)
		.reject(_.isBoolean)
		.reject(_.isString)
		.first()
		.toFixed(2);
}

function rejectByResult() {
	function User(name, disabled) {
		this.name = name;
		this.disabled = disabled;
	}

	User.prototype.enabled = function() {
		return !this.disabled;
	};

	var collection = [
			new User('Phil', true),
			new User('Wilson', false),
			new User('Kathey', true),
			new User('Nina', false)
		],
		enabled = _.flow(_.identity, _.partialRight(_.result, 'enabled'));

	return {
		disabled: _(collection)
			.reject('disabled')
			.value(),
		enabled: _(collection)
			.reject(_.negate(enabled))
			.value()
	}
}

function initial() {
	var string = 'abc\n';

	return _(string)
		.slice()
		.initial()
		.join('');
}

function rest() {
	var collection = [
		{ name: 'init', task: _.noop },
		{ name: 'sort', task: _.random },
		{ name: 'search', task: _.random }
	];

	return _(collection)
		.rest()
		.invoke('task')
		.value();
}

function contains() {
	var string = 'abc123',
		array = [ 'a', 'b', 'c', 1, 2, 3 ];

	return {
		string: _(string)
			.filter(_.isString)
			.contains('c'),
		array: _(array)
			.filter(_.isString)
			.contains('c')
	};
}

function findFilterExists() {
	var string = 'Dana Porter',
		array = [
			{ name: 'Luis', gender: 'm' },
			{ name: 'Rhonda', gender: 'f' },
			{ name: 'Kirk', gender: 'm' },
			{ name: 'Emily', gender: 'f' }
		];

	return {
		string: _(string)
			.chain()
			.filter(function(item) {
				return item.toUpperCase() === 'A';
			})
			.size()
			.isEqual(2)
			.value(),
		array: !!(_(array)
			.find(function(item) {
				return _.first(item.name).toUpperCase() === 'R' &&
					item.gender === 'f';
			}))
	};
}

function every() {
	var collection = [
		1414728000000,
		1383192000000,
		1351656000000,
		1320033600000
	];

	return _(collection)
		.map(function(item) {
			return new Date(item);
		})
		.every(function(item) {
			return item.getMonth() === 9 && item.getDate() === 31;
		});
}

function some() {
	var collection = [
		{ name: 'Danielle', age: 34, skill: 'Backbone' },
		{ name: 'Sammy', age: 19, skill: 'Ember' },
		{ name: 'Donna', age: 41, skill: 'Angular' },
		{ name: 'George', age: 17, skill: 'Marionette' }
	];

	return _(collection)
		.reject({ skill: 'Ember' })
		.reject({ skill: 'Angular'})
		.some(function(item) {
			return item.age >= 25;
		});
}

function size() {
	var object = { first: 'Charlotte', last: 'Hall' },
		array = _.range(10);

	return {
		object: _(object)
			.omit('first')
			.size(),
		array: _(array)
			.drop(5)
			.size()
	};
}

function countBy() {
	var collection = [
		{ name: 'Pamela', gender: 'f' },
		{ name: 'Vanessa', gender: 'f' },
		{ name: 'Gina', gender: 'f' },
		{ name: 'Dennis', gender: 'm' }
	];

	return _(collection)
		.countBy('gender')
		.pairs()
		.sortBy(1)
		.reverse()
		.pluck(0)
		.value();
}

function reduceCount() {
	var collection = [
		{ name: 'Chad', skills: [ 'backbone', 'lodash' ] },
		{ name: 'Simon', skills: [ 'html', 'css', 'less' ] },
		{ name: 'Katie', skills: [ 'grunt', 'underscore' ] },
		{ name: 'Jennifer', skills: [ 'css', 'grunt', 'less' ] }
	];

	return _(collection)
		.pluck('skills')
		.reduce(function(result, item) {
			return _.size(item) > 2 &&
				_.contains(item, 'grunt') &&
				result + 1;
		}, 0);
}

function groupBy() {
	var collection = [
		{ name: 'Rudolph', age: 24 },
		{ name: 'Charles', age: 43 },
		{ name: 'Rodney', age: 37 },
		{ name: 'Marie', age: 28 }
	];

	return _(collection)
		.map(function(item) {
			var experience = 'seasoned veteran';
			if (item.age < 30) {
				experience = 'noob';
			} else if (item.age < 40) {
				experience = 'geek cred';
			}
			return _.extend({
				experience: experience
			}, item);
		})
		.groupBy('experience')
		.map(function(item, key) {
			console.log(arguments);
			return key + ' (' + _.pluck(item, 'name').join(', ') + ')';
		})
		.value();
}

function union() {
	var	collection = _.sample(_.range(1, 101), 10);

	return _(collection)
		.union([ 25, 50, 75])
		.sortBy()
		.value();
}

function uniq() {
	function name(item) {
		return item.first + ' ' + item.last;
	}

	var collection = [
		{ first: 'Renee', last: 'Morris' },
		{ first: 'Casey', last: 'Wise' },
		{ first: 'Virginia', last: 'Grant' },
		{ first: 'Toni', last: 'Morris' }
	];

	return {
		pluck: _(collection)
			.uniq('last')
			.sortBy('last')
			.value(),
		callback: _(collection)
			.uniq(name)
			.sortBy(name)
			.value(),
		map: _(collection)
			.map(name)
			.uniq()
			.sortBy()
			.value()
	};
}

function pluck() {
	var collection = [
		{ gender: 'f', dob: new Date(1984, 3, 8) },
		{ gender: 'm', dob: new Date(1983, 7, 16) },
		{ gender: 'f', dob: new Date(1987, 2, 4) },
		{ gender: 'm', dob: new Date(1988, 5, 2) }
	];

	return _(collection)
		.where({ gender: 'm' })
		.pluck('dob')
		.map(function(item) {
			return item.toLocaleString();
		})
		.value()
}

function without() {
	var collection = _.range(1, 11);

	return _(collection)
		.without(5, _.first(collection), _.last(collection))
		.reverse()
		.value()
}

function min() {
	var collection = [
		{ name: 'Daisy', wins: 10 },
		{ name: 'Norman', wins: 12 },
		{ name: 'Kim', wins: 8 },
		{ name: 'Colin', wins: 4 }
	];

	return _(collection)
		.reject(function(item) {
			return item.wins < 5
		})
		.min('wins');
}

function max() {
	var collection = [
		{ name: 'Kerry', balance: 500, credit: 344 },
		{ name: 'Franklin', balance: 0, credit: 554 },
		{ name: 'Lillie', balance: 1098, credit: 50 },
		{ name: 'Clyde', balance: 473, credit: -900 }
	];

	return _(collection)
		.filter('balance')
		.filter('credit')
		.max(function(item) {
			return item.balance + item.credit;
		});
}

function index() {
	function rank(coll, name) {
		return _(coll)
			.sortBy('score')
			.reverse()
			.pluck('name')
			.indexOf(name) + 1;
	}

	var collection = [
		{ name: 'Ruby', score: 43 },
		{ name: 'Robert', score: 59 },
		{ name: 'Lindsey', score: 38 },
		{ name: 'Marty', score: 55 }
	];

	return {
		Ruby: rank(collection, 'Ruby'),
		Marty: rank(collection, 'Marty')
	};
}

function difference() {
	var collection = _.range(1, 51),
		odds = _.filter(_.range(1, 101), function(item) {
			return item % 2;
		});

	return _(collection)
		.difference(odds)
		.takeRight(10)
		.reverse()
		.value();
}

function xor() {
	var collection = _.range(1, 26),
		evens = _.reject(_.range(1, 51), function(item) {
			return item % 2;
		});
	return _(collection)
		.xor(evens)
		.reverse()
		.value();
}

function tap() {
	var collection = [
			{ name: 'Stuart', age: 41 },
			{ name: 'Leah', age: 26 },
			{ name: 'Priscilla', age: 37 },
			{ name: 'Perry', age: 31 }
		],
		min,
		max;

	return {
		result: _(collection)
			.filter(function(item) {
				return item.age >= 30;
			})
			.tap(function(coll) {
				min = _.min(coll, 'age'),
				max = _.max(coll, 'age')
			})
			.reject(function(item) {
				return item.age === max.age;
			})
			.value(),
		min: min,
		max: max
	};
}

function thru() {
	var collection = _.range(1, _.random(11)),
		result;

	result = _(collection)
		.thru(function(coll) {
			return _.size(coll) > 5 ? coll : [];
		})
		.reverse()
		.value();

	return _.isEmpty(result) ? 'No Results' : result.join(',');
}

function filterKeys() {
	var object = {
		firstName: 'Jerald',
		lastName: 'Wolfe',
		age: 49
	};

	return _(object)
		.keys()
		.filter(function(item) {
			return (/name$/i).test(item);
		})
		.thru(function(items) {
			return _.at(object, items);
		})
		.value();
}

function filterValues() {
	var object = {
		first: 'Connie',
		last: 'Vargas',
		dob: new Date(1984, 08, 11)
	};

	return _(object)
		.values()
		.filter(_.isDate)
		.map(function(item) {
			return item.toLocaleString();
		})
		.value();
}

function pickOmit() {
	var collection = [
		{ first: 'Tracey', last: 'Doyle', age: 40 },
		{ first: 'Toby', last: 'Wright', age: 49 },
		{ first: 'Leonard', last: 'Hunt', age: 32 },
		{ first: 'Brooke', last: 'Briggs', age: 32 }
	];

	return _(collection)
		.indexBy('last')
		.pick(function(value) {
			return value.age >= 35;
		})
		.transform(function(result, item, key) {
			result[key] = _.omit(item, 'last');
		})
		.value();
}

function returnWrapper() {
	function best(coll, prop, count) {
		return _(coll)
			.sortBy(prop)
			.takeRight(count);
	}

	var collection = [
		{ name: 'Mathew', score: 92 },
		{ name: 'Michele', score: 89 },
		{ name: 'Joe', score: 74 },
		{ name: 'Laurie', score: 83 }
	];

	var bestScore = best(collection, 'score', 2);

	return {
		value: bestScore.value(),
		reverse: bestScore.reverse().value(),
		pluck: bestScore.pluck('name').value()
	};
}
