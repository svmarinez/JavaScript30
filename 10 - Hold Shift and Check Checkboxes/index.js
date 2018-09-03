const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(e) {
	//if the shift key is pressed and
	//the box is chekced
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		//do whatcha want
		//loop over every single checkbox
		checkboxes.forEach((checkbox) => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
