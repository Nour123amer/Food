let menu = document.querySelector(".menu");
menu.addEventListener('click',()=>{
    document.querySelectorAll(".target").forEach((item)=>{
        item.classList.toggle('change');
        menu.style.top = "10.5rem";
	  
    })
})

const icons = document.querySelectorAll('.meals i')
let i = 1

setInterval(() => {
	i++
	const icon = document.querySelector('.meals .change')
	icon.classList.remove('change')

	if (i > icons.length) {
		icons[0].classList.add('change')
		i = 1
	} else {
		icon.nextElementSibling.classList.add('change')
	}
}, 4000)