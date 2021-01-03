var _ = require('lodash'),
	args = _(process.argv),
	input;

if (args.size() < 3) {
	console.error('Missing input');
	process.exit(1);
} else if (args.contains('-h')) {
	console.info('Sorts the comma-separated input');
	console.info('Use "-d" for descending order');
	process.exit(0);
}

input = _(process.argv[2].replace(/\s?(,)\s?/g, '$1').split(','))
	.sortBy();

if (args.contains('-d')) {
	input.reverse();
}

console.log(input.join(', '));
