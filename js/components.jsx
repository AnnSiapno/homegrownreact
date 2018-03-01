function list(children) {
	component(
		{
			render: `<ul id'list'>${children}</ul>`
		},
		document.getElementById('app')
	);
}

function task(props) {
	var expand = false;
	var description = `
    <ul>
      <li>${props.description}</li>
    </ul>
  `;
	this.click = function() {
		description = !description
    console.log(description)
		return false;
	};
	return component({
		render: `<li><a href="#" onClick="(function(){
    this.click()
    return false;
})();return false;">${props.title}</a></li>`
	});
}
