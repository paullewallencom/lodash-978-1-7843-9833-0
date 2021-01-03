function pluck() {
	var collection = [
		{ name: 'Virginia', age: 45 },
		{ name: 'Debra', age: 34 },
		{ name: 'Jerry', age: 55 },
		{ name: 'Earl', age: 29 }
	];

	return _.pluck(collection, 'age');
}

function map() {
	var collection = [
		{ name: 'Michele', age: 58 },
		{ name: 'Lynda', age: 23 },
		{ name: 'William', age: 35 },
		{ name: 'Thomas', age: 41 }
	];

	return _.map(collection, 'name');
}

function include() {
	var collection = [
		{ first: 'Ryan', last: 'Coleman', age: 23 },
		{ first: 'Ann', last: 'Sutton', age: 31 },
		{ first: 'Van', last: 'Holloway', age: 44 },
		{ first: 'Francis', last: 'Higgins', age: 38 }
	];

	return _.map(collection, function(item) {
		return _.pick(item, [ 'first', 'last' ]);
	});
}

function exclude() {
	var collection = [
		{ first: 'Clinton', last: 'Park', age: 19 },
		{ first: 'Dana', last: 'Hines', age: 36 },
		{ first: 'Pete', last: 'Ross', age: 31 },
		{ first: 'Annie', last: 'Cross', age: 48 }
	];

	return _.map(collection, function(item) {
		return _.omit(item, 'first');
	});
}

function excludeCallback() {
	function invalidAge(value, key) {
		return key === 'age' && value < 40;
	}

	var collection = [
		{ first: 'Kim', last: 'Lawson', age: 40 },
		{ first: 'Marcia', last: 'Butler', age: 31 },
		{ first: 'Shawna', last: 'Hamilton', age: 39 },
		{ first: 'Leon', last: 'Johnston', age: 67 }
	];

	return _.map(collection, function(item) {
		return _.omit(item, invalidAge);
	});
}

function creatingProperties() {
	var collection = [
		{ name: 'Valerie', jqueryYears: 4, cssYears: 3 },
		{ name: 'Alonzo', jqueryYears: 1, cssYears: 5 },
		{ name: 'Claire', jqueryYears: 3, cssYears: 1 },
		{ name: 'Duane', jqueryYears: 2, cssYears: 0 }
	];

	return _.map(collection, function(item) {
		return _.extend({
			experience: item.jqueryYears + item.cssYears,
			specialty: item.jqueryYears >= item.cssYears ?
				'jQuery' : 'CSS'
		}, item);
	});
}

function changingProperties() {
	var app = {},
		collection = [
			{ name: 'Cameron', supervisor: false },
			{ name: 'Lindsey', supervisor: true },
			{ name: 'Kenneth', supervisor: false },
			{ name: 'Caroline', supervisor: true }
		];

	app.supervisor = _.find(collection, { supervisor: true });

	_.map(collection, function(item) {
		return _.extend(item, { supervisor: false });
	});

	return app.supervisor;
}

function computingSizes() {
	function bytes(b) {
		var units = [ 'B', 'K', 'M', 'G', 'T', 'P' ],
			target = 0;
        while (b >= 1024) { 
            b = b / 1024;
            target++;
        }
		return (b % 1 === 0 ? b : b.toFixed(1)) +
			units[target] + (target === 0 ? '' : 'B');
	}	

	var collection = [
		1024,
		1048576,
		345198,
		120120120
	];

	return _.map(collection, bytes);
}

function mapSize() {
	var collection = [
		[ 1, 2 ],
		[ 1, 2, 3 ],
		{ first: 1, second: 2 },
		{ first: 1, second: 2, third: 3 }
	];

	return _.map(collection, _.size);
}

function mapMinMax() {
	var source = _.range(1000),
		collection = [
			_.sample(source, 50),
			_.sample(source, 100),
			_.sample(source, 150)
		];

	return {
		min: _.map(collection, _.min),
		max: _.map(collection, _.max)
	};
}

function mapSort() {
	var collection = [
		[ 'Evan', 'Veronica', 'Dana' ],
		[ 'Lila', 'Ronald', 'Dwayne' ],
		[ 'Ivan', 'Alfred', 'Doug' ],
		[ 'Penny', 'Lynne', 'Andy' ]
	];

	return _.map(collection, _.compose(_.first, function(item) {
		return _.sortBy(item);
	}));
}

function filterThenMap() {
	var collection = [
		{ name: 'Karl', enabled: true },
		{ name: 'Sophie', enabled: true },
		{ name: 'Jerald', enabled: false },
		{ name: 'Angie', enabled: false }
	];

	return _.compose(
		_.partialRight(_.map, 'name'),
		_.partialRight(_.filter, 'enabled')
	)(collection);
}

function mapAndFilter() {
	var collection = [
		{ name: 'Kathy', enabled: false },
		{ name: 'Eugene', enabled: false },
		{ name: 'Rachael', enabled: true },
		{ name: 'Justin', enabled: true }
	];

	return _.flow(
		_.partialRight(_.map, function(item) {
			if (item.enabled) {
				return item.name;
			}
		}),
		_.compact
	).call(undefined, collection);
}

function sortKeys() {
	var object = {
		first: 'Ronald',
		last: 'Walters',
		employer: 'Packt'
	};

	return _.map(_.sortBy(_.keys(object)), function(item) {
		return object[item];
	});
}

function mappingKeys() {
	var users = {},
		preferences = {};

	_.each(_.range(100), function() {
		var id = _.uniqueId('user-');
		users[id] = { type: 'user' };
		preferences[id] = { emailme: !!(_.random()) };
	});

	return _.map(users, function(value, key) {
		return _.extend({ id: key }, preferences[key]);
	});
}

function callingMethods() {
	var object = {
		first: 'Roxanne',
		last: 'Elliot',
		name: function() {
			return this.first + ' ' + this.last;
		},
		age: 38,
		retirement: 65,
		working: function() {
			return this.retirement - this.age;
		}
	};

	return {
		manual: _.map(object, function(value, key) {
			var item = {};
			item[key] = _.isFunction(value) ? object[key]() : value
			return item;
		}),
		result: _.map(object, function(value, key) {
			var item = {};
			item[key] = _.result(object, key);
			return item;
		})
	};
}

function functions() {
	var object = {
		firstName: 'Fredrick',
		lastName: 'Townsend',
		first: function() {
			return this.firstName;
		},
		last: function() {
			return this.lastName;
		}
	};

	var methods = _.map(_.functions(object), function(item) {
		return [ _.bindKey(object, item) ];
	});

	return _.invoke(methods, 0);
}

function values() {
	var object = {
		first: 'Lindsay',
		last: 'Castillo',
		age: 51
	};

	return _.map(_.filter(_.values(object), _.isString), function(item) {
		return '<strong>' + item + '</strong>';
	});
}

function pairs() {
	function capitalize(s) {
    	return s.charAt(0).toUpperCase() + s.slice(1);
	}

	function format(label, value) {
		return '<label>' + capitalize(label) + ':</label>' +
			'<strong>' + value + '</strong>';
	}

	var object = {
		first: 'Julian',
		last: 'Ramos',
		age: 43
	};

	return _.map(_.pairs(object), function(pair) {
		return format.apply(undefined, pair);
	});
}

function sum() {
	var collection = [
		{ ram: 1024, storage: 2048 },
		{ ram: 2048, storage: 4096 },
		{ ram: 1024, storage: 2048 },
		{ ram: 2048, storage: 4096 }
	];

	return {
		ram: _.reduce(collection, function(result, item) {
			return result + item.ram;
		}, 0),
		storage: _.reduce(collection, function(result, item) {
			return result + item.storage;
		}, 0)
	};
}

function sumAccumulator() {
	var collection = [
		{ hits: 2, misses: 4 },
		{ hits: 5, misses: 1 },
		{ hits: 3, misses: 8 },
		{ hits: 7, misses: 3 }
	];

	return _.reduce(collection, function(result, item) {
		return {
			hits: result.hits + item.hits,
			misses: result.misses + item.misses
		};
	}, { hits: 0, misses: 0 });
}

function noAccumulator() {
	function add(a, b) {
		return a + b;
	}

	var collection = [
		{ wins: 34, loses: 21 },
		{ wins: 58, loses: 12 },
		{ wins: 34, loses: 23 },
		{ wins: 40, loses: 15 }
	];

	return {
		range: _.reduce(_.range(1, 6), add),
		wins: _.reduce(_.pluck(collection, 'wins'), add),
		loses: _.reduce(_.pluck(collection, 'loses'), add)
	};
}

function filterThenReduce() {
	var collection = [
		{ name: 'Gina', age: 34, enabled: true },
		{ name: 'Trevor', age: 45, enabled: false },
		{ name: 'Judy', age: 71, enabled: true },
		{ name: 'Preston', age: 19, enabled: false }
	];

	return _.reduce(_.filter(collection, 'enabled'), function(result, item) {
		result.names.push(item.name);
		result.years += item.age;
		return result;
	}, { names: [], years: 0 });
}

function filterAndReduce() {
	var collection = [
		{ name: 'Melissa', age: 28, enabled: true },
		{ name: 'Kristy', age: 22, enabled: true },
		{ name: 'Kerry', age: 31, enabled: false },
		{ name: 'Damon', age: 36, enabled: false }
	];

	return _.reduce(collection, function(result, item) {
		if (item.enabled) {
			result.names.push(item.name);
			result.years += item.age;
		}
		return result;
	}, { names: [], years: 0 });
}

function minMax() {
	function score(item) {
		return _.reduce(item.scores, function(result, score) {
			return result + score;
		});
	}

	var collection = [
		{ name: 'Madeline', scores: [ 88, 45, 83 ] },
		{ name: 'Susan', scores: [ 79, 82, 78 ] },
		{ name: 'Hugo', scores: [ 90, 84, 85 ] },
		{ name: 'Thomas', scores: [ 74, 69, 78 ] }
	];

	return {
		min: _.min(collection, score),
		max: _.max(collection, score)
	}
}

function average() {
	function average(items) {
		return _.reduce(items, function(result, item) {
			return result + item;
		}) / items.length;
	}

	var collection = [
		{ name: 'Anthony', scores: [ 89, 59, 78 ] },
		{ name: 'Wendy', scores: [ 84, 80, 81 ] },
		{ name: 'Marie', scores: [ 58, 67, 63 ] },
		{ name: 'Joshua', scores: [ 76, 68, 74 ] }
	];

	return _.reduce(collection, function(result, item, index, coll) {
		var ave = average(item.scores);
		result.push(ave);
		if (index === (coll.length - 1)) {
			return average(result);
		}
		return result;
	}, []).toFixed(2);
}

function reduceKeys() {
	var object = {
			first: 'Kerry',
			last: 'Singleton',
			age: 41
		},
		allowed = [ 'first', 'last' ];

	return {
		reduce: _.reduce(object, function(result, value, key) {
			if (_.contains(allowed, key)) {
				result[key] = value;
			}
			return result;
		}, {}),
		pick: _.pick(object, allowed)
	};
}

function transform() {
	var object = {
		first: '&lt;strong&gt;Nicole&lt;/strong&gt;',
		last: '&lt;strong&gt;Russel&lt;/strong&gt;',
		age: 26
	};

	return _.transform(object, function(result, value, key) {
		if (_.isString(value)) {
			result[key] = _.unescape(value);
		}
	});
}

function transformConstructor() {
	function Person(first, last) {
		this.first = first;
		this.last = last;
	}

	Person.prototype.name = function name() {
		return this.first + ' ' + this.last;
	};

	var object = new Person('Alex', 'Rivera');

	return _.transform(object, function(result, value, key) {
		if (_.isString(value)) {
			result[key] = value.toUpperCase();
		}
	}).name();
}

function groupingAndIndexing() {
	var collection = [
		{ id: _.uniqueId('id-'), position: 'absolute', top: 12 },
		{ id: _.uniqueId('id-'), position: 'relative', top: 20 },
		{ id: _.uniqueId('id-'), position: 'absolute', top: 12 },
		{ id: _.uniqueId('id-'), position: 'relative', top: 20 }
	];

	return {
		grouped: _.groupBy(collection, 'position'),
		indexed: _.indexBy(collection, 'id')
	};
}

function bindMap() {
	var app = {
		states: [
			'running',
			'off',
			'paused'
		],
		machines: [
			{ id: _.uniqueId(), state: 1 },
			{ id: _.uniqueId(), state: 0 },
			{ id: _.uniqueId(), state: 0 },
			{ id: _.uniqueId(), state: 2 }
		]
	};

	var mapStates = _.partialRight(_.map, function(item) {
		return _.extend({
			state: this.states[item.state]
		}, _.pick(item, 'id'));
	}, app);

	return mapStates(app.machines);
}

function bindReduce() {
	var collection = [ 12, 34, 53, 43 ],
		settings = { tax: 1.15 },
		applyTax = _.partialRight(_.reduce, function(result, item) {
			return result + item * this.tax;
		}, 0, settings);

	return applyTax(collection).toFixed(2);
}

function genericMap() {
	function add(item) {
		var result = _.clone(item);
		result[this.prop] += this.value;
		return result;
	}

	function upper(item) {
		var result = _.clone(item);
		result[this.prop] = result[this.prop].toUpperCase();
		return result;
	}

	var collection = [
		{ name: 'Gerard', balance: 100 },
		{ name: 'Jean', balance: 150 },
		{ name: 'Suzanne', balance: 200 },
		{ name: 'Darrell', balance: 250 }
	];

	var mapAdd = _.partial(_.map, collection, add),
		mapUpper = _.partial(_.map, collection, upper);

	return {
		add50: mapAdd({ prop: 'balance', value: 50 }),
		add100: mapAdd({ prop: 'balance', value: 100 }),
		upper: mapUpper({ prop: 'name'})
	};
}

function genericReduce() {
	function sum(a, b) {
		return a + b[this.prop];
	}

	var collection = [
		{ low: 40, high: 70 },
		{ low: 43, high: 83 },
		{ low: 39, high: 79 },
		{ low: 45, high: 74 }
	];

	var reduceSum = _.partial(_.reduce, collection, sum, 0); 

	return {
		low: reduceSum({ prop: 'low' }),
		high: reduceSum({ prop: 'high' })
	};
}

function mapReduceChain() {
	var collection = [
		{ name: 'Wade', balance: 100 },
		{ name: 'Donna', balance: 125 },
		{ name: 'Glenn', balance: 90 },
		{ name: 'Floyd', balance: 110 }
	], bonus = 25;

	var mapped = _.map(collection, function(item) {
		return _.extend({
			bonus: item.balance + bonus
		}, item);
	});

	return _.reduce(mapped, function(result, item, index, coll) {
		result += (item.bonus - item.balance) / item.bonus;
		if (index === (coll.length - 1)) {
			result = result / coll.length * 100;
		}
		return result;
	}, 0).toFixed(2) + '%';
}
