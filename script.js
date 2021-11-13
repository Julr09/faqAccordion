const button = document.getElementsByClassName('toggle');
const title = document.getElementsByClassName('q');
const block = document.getElementsByClassName('qa');

function toggle (trigger, element) {
	for (let i = 0; i < trigger.length; i++) {
		trigger[i].addEventListener('click', () => {
			for (let j = 0; j < element.length; j++) {
				element[j].classList.remove('active')
			}
			element[i].classList.toggle('active')
		})
	}
}

toggle(button, block);
toggle(title, block);