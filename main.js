// Refer to UI elements
var button = document.getElementById('searchButton');
var txtInput = document.getElementById('searchKey');

// Bind click event of the button with an event listener
button.addEventListener('click', function(){
	var text = txtInput.value;
	// Show alert box with this text
	alert(text);
})