const List = children => {
	return MyReact.createElement('ul', null, children);
};

const ListItem = (title, props) => {
	return MyReact.createElement('li', props, [title]);
};

const TodoDescription = (desc, props) => {
	var li = ListItem(desc, props);
	return List([li]);
};

class ToDoItemNew {
	constructor(props) {
		this.props = props;
	}

	onClick() {
		var el = document.getElementById(this.props.descProps.id);
		if (el.style.display === 'none') {
			el.setAttribute('style', 'display: block');
		} else {
			el.setAttribute('style', 'display: none');
		}
	}

	render() {
		var li = ListItem(this.props.title, null);
		var info = TodoDescription(this.props.desc, this.props.descProps);
		return MyReact.createElement(
			'div',
			{
				onClick: this.onClick.bind(this)
			},
			[li, info]
		);
	}
}
