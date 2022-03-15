/*Abre e fecha o menu uando clicar no icone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/*Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* Mudar o header da pagina quando der srcoll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
    if(window.scrollX >= navHeight){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
       } else{
          // menor que a altura do header
        header.classList.remove('scroll')
       }
}
   
/* Carrousel SWiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767: {
          slidesPerView: 2,
          setWrappersize: true  
        }
    }
  })

/* Scrool Reveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
`#home .image, #home .text, 
#about .image, #about .text, 
#services header, #services .card, 
#testimonials .testimonials, #testimonials .testimonials, 
#contact .text, #contact .links, 
footer .brand, footer .social
`,{interval:100})

const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

/*Menu ativo conforme a sessão vísivel na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuCurrentSection(){
    const checkpoint =  window.pageYOffset + (window.innerHeight /8) * 4

    for (const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }

}


/* When Scroll */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuCurrentSection()
  })