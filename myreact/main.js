let render = (el, node) => {
	node.appendChild(el);
};

let create = (el, props, children) => {
	let newEl = document.createElement(el);
	children.forEach(child => {
		// when children contains components
		if (typeof child === 'object') {
			newEl.appendChild(child);
		} else {
			newEl.innerHTML += child;
		}
	});
	if (props) {
		for (let k in props) {
			// an event listener if it begins with 'on'
			// the prop must be in camel case to detect the 'on'
			if (/^on.*$/.test(k)) {
				let func = props[k];
				newEl.addEventListener(k.substring(2).toLowerCase(), function() {
					func();
				});
			} else {
				newEl.setAttribute(k, props[k]);
			}
		}
	}
	return newEl;
};

let newInstance = (cls, props) => {
	const component = new cls(props);
	return component.render();
};

class Component {
	constructor(props) {
		this.props = props;
	}

	// TODO: add component functions here (e.g. setState)
}

let MyReact = {
	render: render,
	create: create,
	newInstance: newInstance,
	component: Component
};
