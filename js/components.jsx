class List extends MyReact.component {
	constructor(props) {
		super(props);
	}

	render() {
		return MyReact.create('ul', null, this.props.children);
	}
}

class ListItem extends MyReact.component {
	constructor(props) {
		super(props);
	}

	render() {
		return MyReact.create('li', this.props.props, this.props.title);
	}
}

class TodoDescription extends MyReact.component {
	constructor(props) {
		super(props);
	}

	render() {
		return MyReact.create('span', this.props.props, this.props.desc);
	}
}

class ToDoItem extends MyReact.component {
	constructor(props) {
		super(props);
	}

	onClick() {
		let el = document.getElementById(this.props.descProps.id);
		if (el.style.display === 'none') {
			el.setAttribute('style', 'display: block');
		} else {
			el.setAttribute('style', 'display: none');
		}
	}

	render() {
		let li = MyReact.newInstance(ListItem, {
			title: [this.props.title],
			props: null
		});
		let info = MyReact.newInstance(TodoDescription, {
			desc: [this.props.desc],
			props: this.props.descProps
		});
		return MyReact.create(
			'div',
			{
				onClick: this.onClick.bind(this)
			},
			[li, info]
		);
	}
}
