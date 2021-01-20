// import './babel'
import './styles/styles.css'
import './styles/style.sass'

import {generateGuidelines} from './generateGuidelines'
import {generatePortfolio} from './generatePortfolio'
import {generateCertification} from './generateCertification'
import {generatePupil} from './generatePupil'

const menuList = document.querySelector('.menu-list')
const menuDecoration = (target) => {
	const menuItems = menuList.querySelectorAll('.menu-list__caption')
	menuItems.forEach(item => {
		item.style.textDecoration = 'none'
	})
	target.style.textDecoration = 'underline'
}

menuList.addEventListener('click', (e)=>{
	const target = e.target
	if (target.tagName !== 'LI') {return}
	const targetPage = target.dataset.id
	switch (targetPage) {
		case 'generatePortfolio': generatePortfolio();
			break;
		case 'generateGuidelines': generateGuidelines();
			break;
		case 'generateCertification': generateCertification();
			break;
		case 'generatePupil': generatePupil();
			break;
		default: break;
	}
	menuDecoration(target)
})