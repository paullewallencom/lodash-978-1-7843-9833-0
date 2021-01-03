function bind() {
	function sayWhat() {
		return 'Say, ' + this.what;
	}

	var sayHello = _.bind(sayWhat, {
		what: 'hello'
	});

	var sayGoodbye = _.bind(sayWhat, {
		what: 'goodbye'
	});

	return {
		hello: sayHello(),
		goodbye: sayGoodbye()
	};
}

function bindArgs() {
	function sayWhat(what) {
		if (_.isUndefined(what)) {
			what = this.what;
		}
		return 'Say, ' + what;
	}

	var sayHello = _.bind(sayWhat, {
		what: 'hello'
	});

	var sayGoodbye = _.bind(sayWhat, {}, 'goodbye'),
		saySomething = _.bind(sayWhat, {});

	return {
		hello: sayHello(),
		goodbye: sayGoodbye(),
		something: saySomething('what?')
	};
}

function bindAll() {
	function bindName(name) {
		return _.bind(name, {
			first: 'Becky',
			last: 'Rice'
		});
	}

	var object = {
		first: 'Ralph',
		last: 'Crawford',
		name: function() {
			return this.first + ' ' + this.last;
		}
	};

	var name = bindName(object.name),
		result = {};

	result['original'] = object.name();
	result['bind'] = name();

	_.bindAll(object);

	name = bindName(object.name)

	result['bindAll'] = name();

	return result;
}

function bindAllName() {
	function getName() {
		return this.name;
	}

	var object = {
		name: 'My Bound Object',
		method1: getName,
		method2: getName,
		method3: getName
	};

	_.bindAll(object, [ 'method1', 'method2' ]);

	var method3 = _.bind(object.method3, {
		name: 'New Context'
	});

	return {
		method1: object.method1(),
		method2: object.method2(),
		method3: method3()
	};
}

function bindKey() {
	function workLeft() {
		return 65 - this.age + ' years';
	}

	var object = {
		age: 38
	};

	var work = _.bindKey(object, 'work');

	object.work = workLeft;

	return work();
}

function bindKeyArgs() {
	function workLeft(retirement, period) {
		return retirement - this.age + ' ' + period;
	}

	var collection = [
		{ age: 34, retirement: 60 },
		{ age: 47 },
		{ age: 28, retirement: 55 },
		{ age: 41 }
	];

	var functions = [],
		result = [];

	_.forEach(collection, function(item) {
		functions.push(_.bindKey(item, 'work', item.retirement ?
			item.retirement : 65));
	});

	_.forEach(collection, function(item) {
		_.extend(item, { work: workLeft });
	});

	_.forEach(functions, function(item) {
		result.push(item('years'));
	});

	return result;
}

function partial() {
	function sayWhat(what) {
		return 'Say, ' + what;
	}

	var hello = _.partial(sayWhat, 'hello'),
		goodbye = _.partial(sayWhat, 'goodbye');

	return {
		hello: hello(),
		goodbye: goodbye()
	};
}

function partialArgs() {
	function greet(greeting, name) {
		return greeting + ', ' + name;
	}

	var hello = _.partial(greet, 'hello'),
		goodbye = _.partial(greet, 'goodbye');

	return {
		hello: hello('Fran'),
		goodbye: goodbye('Jacob')
	};
}

function partialRight() {
	function greet(name, greeting) {
		return greeting + ', ' + name;
	}

	var hello = _.partialRight(greet, 'hello'),
		goodbye = _.partialRight(greet, 'goodbye');

	return {
		hello: hello('Brent'),
		goodbye: goodbye('Alison')
	};
}

function partialLodash() {
	var collection = [
		'Sheila',
		'Kurt',
		'Wade',
		'Kyle'
	];
	
	var random = _.partial(_.random, 1, collection.length),
		sample = _.partial(_.sample, collection);

	return {
		random: random(),
		sample: sample()
	};
}

function wrap() {
	function strong(value) {
		return '<strong>' + value + '</strong>';
	}

	function regex(exp, val) {
		exp = _.isRegExp(exp) ?
			exp : new RegExp(exp);
		return _.isUndefined(val) ?
			exp : exp.exec(val);
	}

	var boldName = _.wrap('Marianne', strong),
		getNumber = _.wrap('(\\d+)', regex);

	return {
		strong: boldName(),
		regex: getNumber('abc123')[1]
	};

}

function wrapFunction() {

	var user = _.sample([ 'Scott', 'Breanne' ]),
		allowed = [ 'Scott', 'Estelle' ];

	function permission(func) {
		if (_.contains(allowed, user)) {
			return func.apply(null, _.slice(arguments, 1));
		}
		throw new Error('DENIED');
	}

	function echo(value) {
		return value;
	}

	var welcome = _.wrap(echo, permission);

	return welcome('Yo there!');

}

function after() {
	function work(value) {
		progress();
	}

	function reportProgress() {
		console.log(++complete + '%');
		progress = complete < 100 ?
			_.after(0.01 * collection.length, reportProgress) :
			_.noop;
	}

	var complete = 0,
		collection = _.range(9999999),
	 	progress = _.noop;

	reportProgress();

	_.forEach(collection, work);
}

function afterAsync() {
	function process(coll, callback) {
		var sync = _.after(coll.length, callback);
		_.forEach(coll, function() {
			setTimeout(sync, _.random(2000));
		});
		console.log('timeouts all set');
	}

	process(_.range(5), function() {
		console.log('callbacks completed');
	});
}

function once() {
	function getLeader(coll) {
		return _.first(_.sortBy(coll, 'score').reverse());
	}

	var collection = [
		{ name: 'Dana', score: 84.4 },
		{ name: 'Elsa', score: 44.3 },
		{ name: 'Terrance', score: 55.9 },
		{ name: 'Derrick', score: 86.1 }
	];

	var leader = _.once(getLeader);

	return leader(collection);
}

function memoize() {
	function toCelsius(degrees) {
		return (degrees - 32) * 5 / 9;
	}

	function toFahrenheit(degrees) {
		return degrees * 9 / 5 + 32;
	}

	var celsius = _.memoize(toCelsius),
		fahrenheit = _.memoize(toFahrenheit);

	return {
		celsius: toCelsius(89).toFixed(2) + ' C',
		celsiusCached: celsius(89).toFixed(2) + ' C',
		fahrenheit: toFahrenheit(23).toFixed(2) + ' F',
		fahrenheitCached: fahrenheit(23).toFixed(2) + ' F'
	};
}

function memoizeResolver() {
	function toCelsius(degrees) {
		return (degrees - 32) * 5 / 9;
	}

	function toFahrenheit(degrees) {
		return degrees * 9 / 5 + 32;
	}

	function convertTemp(degrees, system) {
		return system.toUpperCase() === 'C' ?
			toFahrenheit(degrees).toFixed(2) + ' F' :
			toCelsius(degrees).toFixed(2) + ' C';
	}

	var convert = _.memoize(convertTemp, function(degrees, system) {
		return degrees + system;
	});

	return {
		celsius: convert(89, 'F'),
		celsiusCached: convert(89, 'F'),
		fahrenheit: convert(23, 'C'),
		fahrenheitCached: convert(23, 'C')
	};
}

function delay() {
	function poll() {
		if (++cnt < max) {
			console.log('polling round ' + (cnt + 1));
			timer = _.delay(poll, interval);
		} else {
			clearTimeout(timer);
		}
	}

	var cnt = -1,
		max = 5,
		interval = 3000,
		timer;

	poll();
}

function delayArgs() {
	function sayHi(name, delay) {
		function sayHiImp(name) {
			console.log('Hi, ' + name);
		}
		if (_.isUndefined(delay)) {
			_.delay(sayHiImp, 1, name);
		} else {
			_.delay(sayHiImp, delay, name);
		}
	}

	sayHi('Jan');
	sayHi('Jim', 3000);
}

function defer() {
	function expensive() {
		_.forEach(_.range(Math.pow(2, 25)), _.noop);
		console.log('done');
	}

	_.defer(expensive);
	console.log('computing...');
}

function deferWrapper() {
	function deferred(func) {
		return _.defer.apply(_, ([ func ]).concat(_.slice(arguments, 1)));
	}

	function setTitle(title) {
		console.log('Title: "' + title + '"');
	}

	function setState(app) {
		console.log('State: "' + app.state + '"');
	}

	var title = _.wrap(setTitle, deferred),
		state = _.wrap(setState, deferred),
		app = { state: 'stopped' };

	title('Home');
	state(app);
	app.state = 'started';
}

function throttle() {
	var el = document.querySelector('#container'),
		onMouseMove = _.throttle(function(e) {
			console.log('X: ' + e.clientX +	' Y: ' + e.clientY);
		}, 750);

	el.addEventListener('mousemove', onMouseMove);
	window.addEventListener('hashchange', function cleanup() {
		el.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mousemove', cleanup);
	});
}

function debounce() {
	function log(msg, item) {
		console.log(msg + ' ' + item);
	}

	var debounced = _.debounce(_.partial(log, 'debounced'), 1),
		throttled = _.throttle(_.partial(log, 'throttled'), 1),
		size = 1500;

	_.forEach(_.range(size), debounced);
	_.forEach(_.range(size), throttled);
}

function compose() {

	function dough(pizza) {
		if (_.isUndefined(pizza)) {
			pizza = {};
		}
		return _.extend({
			dough: true
		}, pizza);
	}

	function sauce(pizza) {
		if (!pizza.dough) {
			throw new Error('Dough not ready');
		}
		return _.extend({
			sauce: true
		}, pizza);
	}

	function cheese(pizza) {
		if (!pizza.sauce) {
			throw new Error('Sauce not ready');
		}
		return _.extend({
			cheese: true
		}, pizza);
	}

	var pizza = _.compose(cheese, sauce, dough);

	return pizza();
}

function flow() {
    function dough(pizza) {
        if (_.isUndefined(pizza)) {
            pizza = {}
        }   
        return _.extend({
            dough: true
        }, pizza);
    }   

    function sauce(pizza) {
        if (!pizza.dough) {
            throw new Error('Dough not ready');
        }   
        return _.extend({
            sauce: true
        }, pizza);
    }   

    function cheese(pizza) {
        if (!pizza.sauce) {
            throw new Error('Sauce not ready');
        }   
        return _.extend({
            cheese: true
        }, pizza);
    }   

    var pizza = _.flow(dough, sauce, cheese);

    return pizza();
}

function curry() {
	function makePizza(dough, sauce, cheese) {
		return {
			dough: dough,
			sauce: sauce,
			cheese: cheese
		};
	}

	function dough(pizza) {
		return pizza(true);
	}

	function sauceAndCheese(pizza) {
		return pizza(true, true);
	}

	var pizza = _.curry(makePizza);

	return sauceAndCheese(dough(pizza));
}
