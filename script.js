// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hover effects for social icons
const icons = document.querySelectorAll('.icons a');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Dynamic text effect for user role
const userRole = document.getElementById('user-role');
const roles = ['👨‍💻 Web Developer + 🎨 Designer', '💡 Innovator + 🔧 Problem Solver', ];
let roleIndex = 0;

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    userRole.textContent = roles[roleIndex];
}, 4000);
