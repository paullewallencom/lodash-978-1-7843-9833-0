function basicForEach() {
	var collection = [
    	'Lois',
		'Kathryn',
		'Craig',
		'Ryan'
	];

	_.forEach(collection, function(name) {
		console.log(name);
	});
}

function forEachIndex() {
	var collection = [
    	'Timothy',
		'Kelly',
		'Julia',
		'Leon'
	];

	_.forEach(collection, function(name, index) {
    	if (name === 'Kelly') {
        	console.log('Kelly Index: ' + index);
        	return false;
    	}
	});
}

function forEachRight() {
	var collection = [
    	'Carl',
		'Lisa',
		'Raymond',
		'Rita'
	];

	var result = [];

	_.forEachRight(collection, function(name) {
    	result.push(name);
	});

	return result;
}

function sortByPropertyName() {
	var collection = [
    	{ name: 'Moe' },
    	{ name: 'Seymour' },
    	{ name: 'Harold' }, 
    	{ name: 'Willie' }
	];

	return _.sortBy(collection, function(item) {
    	return item.name;
	});
}

function sortByShorthand() {
	var collection = [
		{ name: 'Moe' },
		{ name: 'Seymour' },
		{ name: 'Harold' },
		{ name: 'Willie' }
	];

	return _.sortBy(collection, 'name');
}

function sortByMultipleProperties() {
	var collection = [
		{ name: 'Clancy', age: 43 },
		{ name: 'Edna', age: 32 },
		{ name: 'Lisa', age: 10 },
		{ name: 'Philip', age: 10 }
	];

	return _.sortBy(collection, [ 'age', 'name' ]);
}

function sortedIndex() {
	var collection = [
    	'Carl',
    	'Gary',
    	'Luigi',
    	'Otto'
	];

	var name = 'Luke';

	collection.splice(_.sortedIndex(collection, name), 0, name);

	return collection;
}

function where() {
	var collection = [
		{ name: 'Moe', age: 47, gender: 'm' },
		{ name: 'Sarah', age: 32, gender: 'f' },
		{ name: 'Melissa', age: 32, gender: 'f' },
		{ name: 'Dave', age: 32, gender: 'm' }
	];

	return _.where(collection, { age: 32, gender: 'f' });
}

function filterPluck() {
	var collection = [
		{ name: 'Sean', enabled: false },
		{ name: 'Joel', enabled: true },
		{ name: 'Sue', enabled: false },
		{ name: 'Jackie', enabled: true }
	];

	return _.filter(collection, 'enabled');
}

function filterCallbackFunction() {
	var collection = [
		{ type: 'shirt', size: 'L' },
		{ type: 'pants', size: 'S' },
		{ type: 'shirt', size: 'XL' },
		{ type: 'pants', size: 'M' }	
	];

	return _.filter(collection, function(item) {
		return item.size === 'L' || item.size === 'M';
	});
}

function rejectWhere() {
	var collection = [
    	{ name: 'Ryan', enabled: true },
    	{ name: 'Megan', enabled: false },
    	{ name: 'Trevor', enabled: false },
    	{ name: 'Patricia', enabled: true }
	];

	return _.reject(collection, { enabled: false });
}

function find() {
	var collection = [
		{ name: 'Derek', age: 37 },
		{ name: 'Caroline', age: 35 },
		{ name: 'Malcolm', age: 37 },
		{ name: 'Hazel', age: 62 }
	];

	return _.find(collection, { age:37 });
}

function findLast() {
	var collection = [
		{ name: 'Derek', age: 37 },
		{ name: 'Caroline', age: 35 },
		{ name: 'Malcolm', age: 37 },
		{ name: 'Hazel', age: 62 }
	];

	return _.findLast(collection, { age:37 });
}

function takeStringsAndArrays() {
	var array = [
		'Steve',
		'Michelle',
		'Rebecca',
		'Alan'
	];

	return {
		array: _.take(array, 2),
		string: _.take('lodash', 2).join('')
	}
}

function takeRight() {
	var array = [
			'Steve',
			'Michelle',
			'Rebecca',
			'Alan'
		],
		string = 'lodash';

	return {
		array: _.takeRight(array, 2),
		string: _.takeRight(string, 4).join('')
	}
}

function chunk() {
	function process(chunks, index) {
		var chunk = chunks[index];
		if (_.isUndefined(chunk)) {
			return;
		};
		console.log('doing expensive work ' + _.last(chunk));
		_.defer(_.partial(process, chunks, ++index));
	}

	var collection = _.range(10000),
		chunks = _.chunk(collection, 50);

	process(chunks, 0);
}

function proportionalChunks() {
	var collection = _.range(10),
		size = Math.ceil(0.25 * collection.length);
	return _.chunk(collection, size);
}

function uniq() {
	var collection = [
		'Walter',
		'Brenda',
		'Arthur',
		'Walter'
	];

	return _.uniq(collection);
}

function uniqCallback() {
	var collection = [
		{ first: 'Julie', last: 'Sanders' },
		{ first: 'Craig', last: 'Scott' },
		{ first: 'Catherine', last: 'Stewart' },
		{ first: 'Julie', last: 'Sanders' },
		{ first: 'Craig', last: 'Scott' },
		{ first: 'Janet', last: 'Jenkins' }
	];

	return _.uniq(collection, function(item) {
		return item.first + item.last;
	});
}

function groupBy() {
	var collection = [
		{ name: 'Lori', size: 'S' },
		{ name: 'Johnny', size: 'M' },
		{ name: 'Theresa', size: 'S' },
		{ name: 'Christine', size: 'S' }
	];

	return _.groupBy(collection, 'size');
}

function groupByCallback() {
	var collection = [
		{ name: 'Andrea', age: 20 },
		{ name: 'Larry', age: 50 },
		{ name: 'Beverly', age: 67 },
		{ name: 'Diana', age: 39 }
	];

	return _.groupBy(collection, function(item) {
		return item.age > 65 ? 'retired' : 'working';
	});
}

function minMax() {
	var collection = [
		{ name: 'Douglas', age: 52, experience: 5 },
		{ name: 'Karen', age: 36, experience: 22 },
		{ name: 'Mark', age: 28, experience: 6 },
		{ name: 'Richard', age: 30, experience: 16 }
	];

	return {
		min: _.min(collection, 'age'),
		max: _.max(collection, function(item) {
			return item.age + item.experience;
		})
	}
}

function size() {
	var collection = [
			{ name: 'Gloria' },
			{ name: 'Janice' },
			{ name: 'Kathryn' },
			{ name: 'Roger' }
		],
		first = _.first(collection);

	return {
		collection: _.size(collection),
		object: _.size(first),
		string: _.size(first.name)
	}
}

function flatten() {
	var collection = [
			{ employer: 'Lodash', employees: [
				{ name: 'Barbara' },
				{ name: 'Patrick' },
				{ name: 'Eugene' }
			]},
			{ employer: 'Backbone', employees: [
				{ name: 'Patricia' },
				{ name: 'Lillian' },
				{ name: 'Jeremy' }
			]},
			{ employer: 'Underscore', employees: [
				{ name: 'Timothy' },
				{ name: 'Bruce' },
				{ name: 'Fred' }
			]}
		],
		employees = _.flatten(_.pluck(collection, 'employees'));

	return _.filter(employees, function(employee) {
		return (/^[bp]/i).test(employee.name);		
	});
}

function compact() {
	var collection = [
			{ name: 'Sandra' },
			0,
			{ name: 'Brandon' },
			null,
			{ name: 'Denise' },
			undefined,
			{ name: 'Jack' }
		],
		letters = [ 's', 'd' ],
		compact = _.compact(collection),
		result = [];

	_.each(letters, function(letter) {
		result = result.concat(
			_.filter(compact, function(item) {
				return _.startsWith(item.name.toLowerCase(), letter);
			})
		);
	});

	return result;
}

function pluckCompact() {
	var collection = [
			{ name: 'Sandra' },
			{},
			{ name: 'Brandon' },
			true,
			{ name: 'Denise' },
			1,
			{ name: 'Jack' }
		],
		letters = [ 's', 'd' ],
		names = _.compact(_.pluck(collection, 'name')),
		result = [];

	_.each(letters, function(letter) {
		result = result.concat(
			_.filter(names, function(name) {
				return _.startsWith(name.toLowerCase(), letter);
			})
		);
	});

	return result;
}

function every() {
	var collection = [
		{ name: 'Jonathan' },
		{ first: 'Janet' },
		{ name: 'Kevin' },
		{ name: 'Ruby' }
	];

	if (!_.every(collection, 'name')) {
		return 'Missing name property';
	}
}

function some() {
	var collection = [
		{ name: 'Sean' },
		{ name: 'Aaron' },
		{ name: 'Jason' },
		{ name: 'Lisa' }
	];

	if (_.some(collection, 'name')) {
		// Perform expensive processing...
	}

	return '';
}

function union() {
	var css = [
			'Philip',
			'Donald',
			'Mark'
		],
		sass = [
			'Gary',
			'Michelle',
			'Philip'
		],
		less = [
			'Wayne',
			'Ruth',
			'Michelle'
		];

	return _.union(css, sass, less);
}

function intersection() {
	var css = [
			'Rachel',
			'Denise',
			'Ernest'
		],
		sass = [
			'Lisa',
			'Ernest',
			'Rachel'
		],
		less = [
			'Ernest',
			'Rachel',
			'William'
		];

	return _.intersection(css, sass, less);
}

function xor() {
 	var sass = [
			'Lisa',
			'Ernest',
			'Rachel'
		],
		less = [
			'Ernest',
			'Rachel',
			'William'
		];

	return _.xor(sass, less);
}

