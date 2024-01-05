document.addEventListener("DOMContentLoaded", () => {	
	const button = document.querySelector('.button');
	button.addEventListener('click', (e) => {
		let tooltip = document.querySelector('.tooltip');
		if (!tooltip) {			
			const tooltipHeader = e.target.dataset.tooltipHeader ? e.target.dataset.tooltipHeader : 'Заголовок тултипа';
			const tooltipContent = e.target.dataset.tooltipText ? e.target.dataset.tooltipText : 'Текст тултипа';		

			const positionButton = e.target.getBoundingClientRect();
			
			const tooltip = document.createElement('div');
			tooltip.classList.add('tooltip');
			tooltip.innerHTML = `<div><b>${tooltipHeader}</b></div>${tooltipContent}`;
			
			if (e.target.dataset.tooltipBackground) {
				tooltip.style.backgroundColor = e.target.dataset.tooltipBackground;
			}
				
			document.body.appendChild(tooltip);
			
			const positionTooltip = tooltip.getBoundingClientRect();		
			tooltip.style.top = positionButton.top - positionTooltip.height - 5 + 'px';
			const left = positionButton.left + (positionButton.width / 2) - (positionTooltip.width / 2) + 'px';		
			tooltip.style.left = (left > 0) ? left : 0;
		} else {
			if (tooltip.style.display == "none") {
				tooltip.style.display = "block";
			} else {
				tooltip.style.display = "none";
			}
		}
	});	
});