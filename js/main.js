const TODO = [
	{
		title: 'Take out the bins',
		description: 'Both general waste and recycling'
	},
	{
		title: 'Buy groceries',
		description: 'Milk, bread and eggs'
	},
	{
		title: 'Do the laundry',
		description: 'Only whites'
	}
];

function test() {
	var string = '';
	for (i = 0; i < TODO.length; i++) {
		string += task({
			title: TODO[i].title,
			description: TODO[i].description
		});
	}
	return string;
}

function load() {
	list(test());
}

window.onload = load;
