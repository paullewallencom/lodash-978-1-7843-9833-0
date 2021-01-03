function amdModule() {
	var collection = [
		{ name: 'Frederick', age: 37 },
		{ name: 'Tasha', age: 45 },
		{ name: 'Lisa', age: 33 },
		{ name: 'Michael', age: 41 }
	];

	require([ 'modules/average-age' ], function(averageAge) {
		console.log(averageAge(collection));
	});
}

function requireLodash() {
	var collection = [
		{ first: 'Georgia', last: 'Todd' },
		{ first: 'Andrea', last: 'Gretchen' },
		{ first: 'Ruben', last: 'Green' },
		{ first: 'Johnny', last: 'Tucker' }
	];

	require([ 'modules/sort-name' ], function(sortName) {
		console.log(sortName(collection).value());
	});
}

function amdLodash() {
	function Person(first, last) {
		this.first = first;
		this.last = last;
	}

	Person.prototype.name = function() {
		return this.first + ' ' + this.last;
	}

	var collection = [
		new Person('Douglas', 'Wright'),
		new Person('Tracy', 'Wilson'),
		new Person('Ken', 'Phelps'),
		new Person('Meredith', 'Simmons')
	];

	require([ '../lib/lodash-amd/collection' ], function(_) {
		console.log(_.invoke(collection, 'name'));
	});
}

function amdLodashFunctions() {
	var collection = [
		{ name: 'Susan', age: 57, enabled: false },
		{ name: 'Marcus', age: 45, enabled: true },
		{ name: 'Ray', age: 25, enabled: false },
		{ name: 'Dora', age: 19, enabled: true }
	];

	require([
		'../lib/lodash-amd/collection/filter',
		'../lib/lodash-amd/function/partial'
	], function(filter, partial) {
		function valid(age, item) {
			return item.enabled && item.age >= age;
		}

		console.log(filter(collection, partial(valid, 25)));
	});
}

function amdLodashChain() {
	var collection = [
		{ name: 'Allan', age: 29, enabled: false },
		{ name: 'Edward', age: 43, enabled: false },
		{ name: 'Evelyn', age: 39, enabled: true },
		{ name: 'Denise', age: 34, enabled: true }
	];

	require([ '../lib/lodash-amd/main' ], function(_) {
		console.log(_(collection)
			.filter('enabled')
			.sortBy('age')
			.reverse()
			.map('name')
			.value());
	});
}

function jQueryMap() {
	var i = 1000;
	console.time('$');
	while (i--) {
		$('li').map(function() {
			return $(this).html();
		});
	}
	console.timeEnd('$');
	i = 1000;
	console.time('_');
	while (i--) {
		_.map($('li'), function(item) {
			return $(item).html();
		});
	}
	console.timeEnd('_');
}

function jQueryBind() {
	function boundFunction(result, item) {
		return result + this.multiplier * item;
	}	

	var scope = { multiplier: 10 },
		collection = _.range(1, 1000),
		jQueryBound = $.proxy(boundFunction, scope),
		lodashBound = _.bind(boundFunction, scope);
	
	console.time('$');
	console.log(_.reduce(collection, jQueryBound));
	console.timeEnd('$');

	console.time('_');
	console.log(_.reduce(collection, lodashBound));
	console.timeEnd('_');
}

function jQueryDeferred() {
	function query(coll, filter, sort) {
		var deferred = $.Deferred(),
			_coll = _(coll).filter(filter);

		if (sort) {
			_coll.sortBy(_.isBoolean(sort) ? undefined : sort);
		}

		if (_.size(coll) > 5000) {
			_.defer(function() {
				deferred.resolve(_coll.value());
			});
		} else {
			deferred.resolve(_coll.value());
		}

		return deferred.promise();
	}

	var collection = _.map(_.range(_.random(10000)), function(item) {
		return {
			id: item,
			enabled: !!_.random()
		};
	}), resultSize;

	console.log('Collection size: ' + _.size(collection));
	query(collection, 'enabled', true).done(function(result) {
		resultSize = _.size(result);
		console.log('Result size: ' + resultSize);
	});

	if (!resultSize) {
		console.log('Awaiting results...');
	}
}

function backboneUnderscore() {
	require([ 'modules/backbone-model' ], function(Model) {
		console.log(new Model({
			first: 'Lance',
			last: 'Newman'
		}, { parse: true }).toJSON());
	});
}

function backboneLodash() {
    require([ 'modules/backbone-model-lodash' ], function(Model) {
        console.log(new Model({
            first: 'Lance',
            last: 'Newman'
        }, { parse: true }).toJSON());
    });
}

function backboneExtend() {
	require([
		'../lib/lodash-amd/collection',
		'modules/backbone-extensions'
	], function(_, Backbone) {

		function name(model) {
			return model.get('name');
		}

		var collection = new Backbone.Collection([
				{ name: 'Frank' },
				{ name: 'Darryl' },
				{ name: 'Stacey' },
				{ name: 'Robin' }
			], { comparator: name });

		console.log(_.map(collection.takeRight(2), name ));

		console.log(_.map(collection.dropWhile(function(model, index, coll) {
			return index < (coll.length - 2);
		}), name));

	});
}
