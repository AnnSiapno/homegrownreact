const TODO = [
	{
		title: 'Take out the trash',
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

function click() {
	console.log('helllllo');
}

var getList = () => {
	var items = [];
	for (i = 0; i < TODO.length; i++) {
		items.push(
			ListItem(TODO[i].title, {
				onClick: function() {
					click();
				}
			})
		);
		items.push(TodoDescription(TODO[i].description));
	}
	return items;
};

function load() {
	var app = List(getList());
	MyReact.render(app, document.getElementById('app'));
}

window.onload = load;
