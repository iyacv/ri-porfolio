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

//text effect userrole part
const userRole = document.getElementById('user-role');
const roles = ['👨‍💻 Web Developer + 🎨 Designer', '💡 Innovator + 🔧 Problem Solver', ];
let roleIndex = 0;

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    userRole.textContent = roles[roleIndex];
}, 4000);

// JavaScript to open and close modals
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".btn").forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const modalId = this.parentElement.parentElement.getAttribute("data-modal");
            openModal(modalId);
        });
    });

    document.querySelectorAll(".thumbnail").forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            const mainImageId = this.closest(".modal-content").querySelector(".modal-image").id;
            swapImages(mainImageId, this);
        });
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function swapImages(mainImageId, clickedThumbnail) {
    const mainImage = document.getElementById(mainImageId);
    mainImage.src = clickedThumbnail.src;
}