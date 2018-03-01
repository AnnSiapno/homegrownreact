const List = children => {
	return MyReact.component('ul', null, children);
};

const ListItem = (title, props) => {
	return MyReact.component('li', props, [title]);
};

const TodoDescription = desc => {
	var li = ListItem(desc, null);
	return List([li]);
};
