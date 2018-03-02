const List = children => {
	return MyReact.createElement('ul', null, children);
};

const ListItem = (title, props) => {
	return MyReact.createElement('li', props, [title]);
};

const TodoDescription = desc => {
	var li = ListItem(desc, null);
	return List([li]);
};

const TodoItem = (title, desc) => {
	var hide = true;
	onClick = () => {
		hide = !hide;
		console.log(hide);
	};
	var li = ListItem(title, null);
	var info = TodoDescription(desc);
	var props = {
		onClick: function() {
			this.onClick();
		}
	};
	return MyReact.createElement('div', props, [li, info]);
};

class ToDoItemNew {
	constructor(props) {
		this.props = props;
	}

	render() {
		var li = ListItem(this.props.title, null);
		var info = TodoDescription(this.props.desc);
		return MyReact.createElement('div', null, [li, info]);
	}
}
