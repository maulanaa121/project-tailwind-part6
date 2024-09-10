/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('is-open');
    hamburger.classList.toggle('ri-close-large-line');
});

navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        navMenu.classList.toggle('is-open');
        hamburger.classList.toggle('ri-close-large-line');
    })
})


/*~~~~~~~~~~~~~~~ SHOW SECTION ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav-link') 

    let current = 'home'

    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        
        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach(item => {
        item.classList.remove('active')

        if(item.href.includes(current)){
            item.classList.add('active')
        }
    })
}

window.addEventListener('scroll',activeLink)

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () =>{
    const header = document.getElementById('navbar')

    if(this.scrollY>=50){
        header.classList.add('border-b','border-yellow-500')
    } else {
        header.classList.remove('border-b','border-yellow-500')
    }

}


window.addEventListener('scroll',scrollHeader)


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,
    spaceBetween:30,
    autoplay: {
        delay:3000,
        disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

const scrollup = () =>{
    const scrollUpBtn = document.getElementById('scroll-up')

    if(this.scrollY>=250){
        scrollUpBtn.classList.remove('-bottom-1/2')
        scrollUpBtn.classList.add('bottom-4')
    } else {
        scrollUpBtn.classList.add('-bottom-1/2')
        scrollUpBtn.classList.remove('bottom-4')
    }

}


window.addEventListener('scroll',scrollup)
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
    reset:true
})

sr.reveal('.home__text,.about__title,.popular__title,.review__title,.review__swiper,.footer__icon,.footer_title')
sr.reveal('.home__image',{delay:500,scale:0.5})
sr.reveal('.service__card,.popular__card',{interval:100})
sr.reveal('.about__leaf',{delay:1000,origin:'right'})
sr.reveal('.about__item__1-text,.about__item__2-image',{origin:'right'})
sr.reveal('.about__item__2-text,.about__item__1-image',{origin:'left'})
sr.reveal('.review__leaf,.footer_floral',{delay:1000,origin:'left'})