function forWhile() {
	var collection = _.range(10000000),
		length = collection.length,
		i = 0;

	console.time('for');
	for (; i < length; i++) {
		collection[i];
	}
	console.timeEnd('for');

	i = 0;

	console.time('while');
	while (++i < length) {
		collection[i];
	}
	console.timeEnd('while');
}

function filterOrder() {
	var collection = _.map(_.range(100), function(item) {
		return {
			id: item,
			enabled: !!_.random()
		};
	});

	var cnt = 1000;

	console.time('first');
	while (--cnt) {
		_(collection)
			.filter('enabled')
			.filter(function(item) {
				return item.id > 75;
			})
			.value();
	}
	console.timeEnd('first');

	cnt = 1000;

	console.time('second');
	while (--cnt) {
		_(collection)
			.filter(function(item) {
				return item.id > 75;
			})
			.filter('enabled')
			.value();
	}
	console.timeEnd('second');

	cnt = 1000;

	console.time('third');
	while (--cnt) {
		_(collection)
			.filter(function(item) {
				return item.enabled && item.id > 75;
			})
			.value();
	}
	console.timeEnd('third');	
}

function sortedFilter() {

	_.mixin({ sortedFilter: function(collection, value, iteratee) {
		iteratee = _.callback(iteratee);
		var index = _.sortedIndex(collection, value, iteratee),
			result = [],
			item;
		while (true) {
			item = collection[index++];
			if (_.isEqual(iteratee(item), iteratee(value))) {
				result.push(item);
			} else {
				break;
			}
		}
		return result;
	}});

	var collection = _.map(_.range(100), function(item) {
		return {
			id: item,
			age: _.random(50)
		};
	});

	var shuffled = _.shuffle(collection),
		sorted = _.sortBy(shuffled, 'age');

	console.time('shuffled');
	console.log(_.filter(shuffled, { age: 25 }));
	console.timeEnd('shuffled');

	console.time('sorted');
	console.log(_.sortedFilter(sorted, { age: 25 }, 'age'));
	console.timeEnd('sorted');
	
}

function indexedFilter() {
	var collection = _.map(_.range(100), function(item) {
		return {
			id: item,
			age: _.random(50),
			enabled: !!_.random()
		};
	});

	var indexed = _.groupBy(collection, function(item) {
		return +item.enabled * item.age;
	});

	console.time('where');
	console.log(_.where(collection, { age: 25, enabled: true }));
	console.timeEnd('where');

	console.time('indexed');
	console.log(indexed[25] || []);
	console.timeEnd('indexed');

}

function unboundCallbacks() {
	function callback(item) {
		return _.extend({
			version: this.version
		}, item);
	}

	function unbound(item) {
		return _.extend({
			version: 2.0
		}, item);
	}

	var cnt = 1000,
		app = { version: 2.0 },
		boundCallback = _.callback(callback, app),
		collection = _.map(_.range(1000), function(item) {
			return { id: item };
		});

	console.time('bound');
	while (--cnt) {
		_.map(collection, boundCallback);
	}
	console.timeEnd('bound');

	cnt = 1000;

	console.time('unbound');
	while (--cnt) {
		_.map(collection, unbound);
	}
	console.timeEnd('unbound');
}

function lazyMap() {
	var collection = _.range(10);

	_(collection)
		.reject(function(item) {
			console.log('checking ' + item);
			return item % 2;
		})
		.map(function(item) {
			console.log('mapping ' + item);
			return item * item;
		})
		.value();
}

function lazyTake() {
	var collection = _.range(1000000).reverse();

	console.time('motivated');
	_.take(_.filter(collection, function(item) {
		return !(item % 10);
	}), 10);
	console.timeEnd('motivated');

	console.time('lazy');
	_(collection)
		.filter(function(item) {
			return !(item % 10);
		})
		.take(100)
		.value();
	console.timeEnd('lazy');
}

function cacheComputation() {
	function primeFactors(number) {
		var factors = [],
			divisor = 2;

		while (number > 1) {
        	while (number % divisor === 0) {
            	factors.push(divisor);
            	number /= divisor;
			}
        	divisor += 1;
        	if (divisor * divisor > number) {
            	if (number > 1) {
					factors.push(number);
				}
            	break;
			}
		}
    	return factors;
	}

	var collection = _.map(_.range(10000), function() {
			return _.random(1000000, 1000010);
		}),
		primes = _.memoize(primeFactors);

	console.time('primes');
	_.each(collection, function(item) {
		primeFactors(item);
	});
	console.timeEnd('primes');
	
	console.time('cached');
	_.each(collection, function(item) {
		primes(item);
	});
	console.timeEnd('cached');
}

function cacheMap() {
	function mapAges(collection) {
		return _.map(collection, 'age');
	}

	var collection = _.map(_.range(100), function(item) {
			return {
				id: item,
				age: _.random(50)
			};
		}),
		ages = _.memoize(mapAges, function(collection) {
			if (_.has(collection, 'mapAges')) {
				return collection.mapAges;
			} else {
				collection.mapAges = _.uniqueId();
			}
		}),
		cnt = 1000;

	console.time('mapAges');
	while (--cnt) {
		_.reduce(mapAges(collection), function(result, item) {
			return result + item;
		}) / collection.length;
	}
	console.timeEnd('mapAges');

	cnt = 1000;

	console.time('ages');
	while (--cnt) {
		_.reduce(ages(collection), function(result, item) {
			return result + item;
		}) / collection.length;
	}
	console.timeEnd('ages');
}
