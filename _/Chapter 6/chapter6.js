function specificGeneric() {

	var collection = [
		{ name: 'Ronnie', age: 43 },
		{ name: 'Ben', age: 19 },
		{ name: 'Sharon', age: 25 },
		{ name: 'Melissa', age: 29 }
	];

	function collectionNames() {
		return _.map(collection, 'name');
	}

	function indirectionNames(coll, prop) {
		return _.map(coll, prop);
	}

	function genericCollNames(coll) {
		return _.map(coll, 'name');
	}

	function genericPropNames(prop) {
		return _.map(collection, prop);
	}

	return {
		collection: collectionNames(),
		indirection: indirectionNames(collection, 'name'),
		genericCol: genericCollNames(collection),
		genericProp: genericPropNames('name')
	};
	
}

function genericArguments() {

	function insert(coll, callback) {
		var toInsert;

		if (_.isFunction(callback)) {
			toInsert = _.slice(arguments, 2);
		} else {
			toInsert = _.slice(arguments, 1);
			callback = _.identity;
		}

		_.each(toInsert, function(item) {
			coll.splice(_.sortedIndex(coll, item, callback), 0, item);
		});

		return coll;

	}

	var collection = _.range(1, 11);

	insert(collection, 8.4);
	console.log(collection);
	insert(collection, 1.1, 6.9);
	console.log(collection);
	insert(collection, 4, 100);
	console.log(collection);

	return collection;

}

function partials() {

	var flattenProp = _.compose(_.flatten, _.pluck),
		skills = _.partialRight(flattenProp, 'skills'),
		names = _.partialRight(flattenProp, 'name');

	var collection = [
		{ name: 'Danielle', skills: [ 'CSS', 'HTML', 'HTTP' ] },
		{ name: 'Candice', skills: [ 'Lo-Dash', 'jQuery' ] },
		{ name: 'Larry', skills: [ 'KineticJS', 'Jasmine' ] },
		{ name: 'Norman', skills: [ 'Grunt', 'Require' ] }
	];

	return {
		skills: _.contains(skills(collection), 'Lo-Dash'),
		names: _.contains(names(collection), 'Candice')
	};
}

function genericCallbacks() {
	var YEAR_MILLISECONDS = 31560000000;

	function validItem(item) {
		return item.age > 21 &&
			_.isString(item.first) &&
			_.isString(item.last);
	}

	function computed(item) {
		return _.extend({
			name: _.result(item, 'first', '') + ' ' +
				_.result(item, 'last', ''),
			yob: new Date(new Date() - (YEAR_MILLISECONDS * item.age))
				.getFullYear()
		}, item);
	}

	var invalidItem = _.negate(validItem);

	var collection = [
		{ first: 'Roderick', last: 'Campbell', age: 56 },
		{ first: 'Monica', last: 'Salazar', age: 38 },
		{ first: 'Ross', last: 'Andrews', age: 45 },
		{ first: 'Martha', age: 51 }
	];

	return {
		every: _.every(collection, validItem),
		filter: _.filter(collection, validItem),
		find: _.find(collection, invalidItem),
		map: _.map(collection, computed)
	};

}

function genericFilters() {
	function byName(coll, name, take) {
		return _(coll)
			.filter({ name: name })
			.take(_.isUndefined(take) ? 100 : take)
			.value();
	}

	var collection = [
		{ name: 'Theodore', enabled: true },
		{ name: 'Leslie', enabled: true },
		{ name: 'Justin', enabled: false },
		{ name: 'Leslie', enabled: false }
	];

	return {
		byName: byName(collection, 'Leslie'),
		filter: byName(_.filter(collection, 'enabled'), 'Leslie'),
		chain: byName(_(collection).filter('enabled'), 'Leslie')
	};
}

function returnChain() {
	function sort(coll, prop, desc) {
		var wrapper = _(coll).sortBy(prop);
		return desc ? wrapper.reverse() : wrapper;
	}

	var collection = [
		{ first: 'Bobby', last: 'Pope' },
		{ first: 'Debbie', last: 'Reid' },
		{ first: 'Julian', last: 'Garcia' },
		{ first: 'Jody', last: 'Greer' }
	];

	return {
		first: sort(collection, 'first').value(),
		desc: sort(collection, 'first', true).value(),
		chain: sort(collection, 'last')
			.takeRight(2)
			.pluck('last')
			.value()
	};
}

function functionComposition() {
	function enabledIndex(obj) {
		return _.transform(obj, function(result, value, key) {
			result[key] = _.result(value, 'enabled', false);
		});
	}

	var collection = [
		{ name: 'Claire', enabled: true },
		{ name: 'Patricia', enabled: false },
		{ name: 'Mario', enabled: true },
		{ name: 'Jerome', enabled: false }
	];

	var indexByName = _.partialRight(_.indexBy, 'name'),
		enabled = _.partial(_.flow(indexByName, enabledIndex),
			collection);

	console.log(enabled());
	collection.push({ name: 'Gloria', enabled: true });
	console.log(enabled());
}

function callbackComposition() {
	var collection = [
		{ first: 'Andrea', last: 'Stewart',  age: 28 },
		{ first: 'Clarence', last: 'Johnston', age: 31 },
		{ first: 'Derek', last: 'Lynch', age: 37 },
		{ first: 'Susan', last: 'Rodgers', age: 41 }
	];

	var minimal = _.flow(_.identity,
		_.partialRight(_.pick, [ 'last', 'age' ]));

	return _.map(collection, minimal);
}

function chainComposition() {
	function sorted(wrapper) {
		return _(wrapper).sortBy();
	}

	function rejectOdd(wrapper) {
		return _(wrapper).reject(function(item) {
			return item % 2
		});
	}

	var sortedEvens = _.flow(sorted, rejectOdd),
		evensSorted = _.flow(rejectOdd, sorted,
			_.partialRight(_.result, 'value')),
		collection = _.shuffle(_.range(1, 11));

	return {
		sortedEvens: sortedEvens(collection).reverse().value(),
		evensSorted: evensSorted(collection)
	};
}

function methodComposition() {

	function validThru(next, value) {
		return value && next;
	}

	function User(first, last, age) {
		this.first = first;
		this.last = last;
		this.age = age;
	}

	User.prototype.valid = function() {
		return _.chain(this.first)
			.isString()
			.thru(_.partial(validThru, this.last))
			.isString()
			.thru(_.partial(validThru, this.age))
			.isFinite()
			.value();
	}

	console.log(new User('Orlando', 'Olson', 25).valid());
	console.log(new User('Timothy', 'Davis').valid());
	console.log(new User('Colleen').valid())
}

function mixinAverage() {

	_.mixin({average: function(coll, callback) {
		return _(coll)
			.map(callback)
			.reduce(function(result, item) {
				return result + item;
			}) / _.size(coll);
	}});

	var collection = [
		{ name: 'Frederick', age: 41, enabled: true },
		{ name: 'Jasmine', age: 29, enabled: true },
		{ name: 'Virgil', age: 47, enabled: true },
		{ name: 'Lila', age: 22, enabled: false }
	];

	return {
		pluck: _.average(collection, 'age'),
		callback: _.average(collection, function(item) {
			return _.size(item.name);
		}),
		chain: _(collection)
			.filter('enabled')
			.average('age')
	};
}

function mixinDistance() {
	_.mixin({distance: function(source, target) {
		var sourceSize = _.size(source),
			targetSize = _.size(target),
			matrix;

		if (sourceSize === 0) {
			return targetSize;
		}
		if (targetSize === 0) {
			return sourceSize;
		}

		matrix = _.map(_.range(targetSize + 1), function(item) {
			return [ item ];
		});

		 _.each(_.range(sourceSize + 1), function(item) {
			matrix[0][item] = item;
		});

		_.each(target, function(targetItem, targetIndex) {
			_.each(source, function(sourceItem, sourceIndex) {
				if (targetItem === sourceItem) {
					matrix[targetIndex + 1][sourceIndex + 1] = matrix[targetIndex][sourceIndex];
				} else {
					matrix[targetIndex + 1][sourceIndex + 1] = Math.min(
						matrix[targetIndex][sourceIndex] + 1,
						Math.min(matrix[targetIndex + 1][sourceIndex] + 1,
							matrix[targetIndex][sourceIndex + 1] + 1));
				}
			});
		});

		return matrix[targetSize][sourceSize]

	}});

	_.mixin({closest: function(coll, value, callback) {
		return _.sortBy(coll, _.flow(_.callback(callback), function(item) {
			return _.distance(value, item);
		}));
	}});

	var collection = [
		'console',
		'compete',
		'competition',
		'compose',
		'composition'
	];

	console.log(_.distance('good', 'food'));
	console.log(_.closest(collection, 'composite'));
	console.log(_(collection).closest('consolate').first());

}
