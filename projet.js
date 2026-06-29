
AOS.init({
    duration: 1200, 
    once: true      
});


const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');

const animateSkills = () => {
    progressBars.forEach(bar => {
        if(bar.classList.contains('sql')) bar.style.width = '95%';
        if(bar.classList.contains('html')) bar.style.width = '80%';
        if(bar.classList.contains('css')) bar.style.width = '60%';
        if(bar.classList.contains('js')) bar.style.width = '50%';
        if(bar.classList.contains('excel')) bar.style.width = '40%';
    });
};

// On déclenche le remplissage de façon fluide quand la section apparaît à l'écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.3 });

observer.observe(skillsSection);