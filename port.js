    /*toggle icon navbar*/
let menuIcon = document.querySelector('@menu-Icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
    /*scroll section active link*/
let section = document.querySelectorAll(section);
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    selector.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetHeight;
        let height = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a(href"="' + id+')').classList.add('active')
            });
        };
    });

    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*remove toggle icon and navbar*/
    menuIcon.classList.remove( 'fa-xmark');
    navbar.classList.remove('active');
 };