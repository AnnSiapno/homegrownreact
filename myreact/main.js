function component(func, node, props) {
	if (node) {
		node.innerHTML = func.render;
	} else {
		return func.render;
	}
}

var MyReact = {
	component: component
};
