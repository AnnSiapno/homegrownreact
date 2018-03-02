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

var getList = () => {
	var items = [];
	for (i = 0; i < TODO.length; i++) {
		var item = MyReact.create(ToDoItemNew, {
			title: TODO[i].title,
			desc: TODO[i].description,
			descProps: {
				id: 'item' + i,
				style: 'display: none'
			}
		});
		items.push(item);
	}
	return items;
};

function loadContent() {
	var app = List(getList());
	MyReact.render(app, document.getElementById('app'));
}

window.onload = loadContent;
