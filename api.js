let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active')
}






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections. forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                menuIcon.classList.remove('bx-x-circle');
                navbar.classList.remove('active');
            });
        }
    });

 Header.classList.toggle('sticky' , window.scrollY >100);

   
};
/*scroll reveal*/
ScrollReveal({ 
    reset: true ,
    distance : '80px',
    duration : 2000,
    delay : 200

});
ScrollReveal().reveal('.home-content,h2', { origin:'top' });
ScrollReveal().reveal('.about-content,h1', { origin: 'left' });
ScrollReveal().reveal('.services-content, .about-image',{ origin: 'right', delay: 300 });
ScrollReveal().reveal('.portfolio-box ,.home-image', { origin: 'bottom', delay: 300 });
ScrollReveal().reveal('.contact form,p', { origin: 'right', delay: 300 });

/*typed js*/
const typed = new Typed('.multiple-text',{
    strings : ['Frontend Developer','YouTuber','Blogger'],
    typeSpeed :100,
    backSpeed :100,
    backDelay :1000,
    loop :true

});


