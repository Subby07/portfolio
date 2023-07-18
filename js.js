const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})


closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function ScrollActive(){
    const scrollY=window.pageYOffset

    sections.foreach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-50
        sectionId=current.getAttribute('id')

        if(scrollY>sectionTop && scrolly <= sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}