document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    let scrollPosition = window.scrollY;

    sections.forEach(function(section, index) {
        if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
});