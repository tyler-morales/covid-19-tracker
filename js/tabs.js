// cache tab buttons
const tabButtons = document.querySelectorAll('.tabs--tab')

for (const btn of tabButtons) {
	btn.addEventListener('click', (e) => {
		
		// change open tab to clicked tab
		for (const btn of tabButtons) {
			btn.className = btn.className.replace(' active', '')
		}

		// hide other tab content
		const tabContent = document.querySelectorAll('.tabContent')
		for (const content of tabContent) {
			content.style.display = 'none'
		}

		// show clicked tab's content
		const clickedTab = document.getElementById(e.target.dataset.columns)
		clickedTab.style.display = 'block'

		// highlight tab color
		e.currentTarget.classList.add('active')
	});
}

// open default tab (states)
const defaultTab = document.getElementById('default').click()