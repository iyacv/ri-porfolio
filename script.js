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

document.getElementById("copyEmail").addEventListener("click", (event) => {
    event.preventDefault(); 

    const email = "gusteriann@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const copiedMessage = document.getElementById("emailCopied");
        copiedMessage.style.display = "inline"; 

        setTimeout(() => {
            copiedMessage.style.display = "none";
        }, 2000);
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

// Text effect user-role part
const userRole = document.getElementById('user-role');
const roles = ['👨‍💻 Information Tech + Cybersecurity', '👨‍💻 Data + 🎨 UI/UX','💡 Innovator + 🔧 Problem Solver'];
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
            const modalContent = this.closest('.modal-content');
            const mainImage = modalContent.querySelector('.modal-image');
            const index = parseInt(this.getAttribute('data-index'));
            updateCurrentImageIndex(modalContent, index);
            updateMainImage(mainImage, modalContent, index);
        });
    });

    document.querySelectorAll(".prev, .next").forEach(function(button) {
        button.addEventListener("click", function() {
            const modalContent = this.closest('.modal-content');
            const mainImage = modalContent.querySelector('.modal-image');
            const thumbnails = modalContent.querySelectorAll('.thumbnail');
            const direction = this.classList.contains("prev") ? -1 : 1;
            changeImage(mainImage, thumbnails, direction);
        });
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    modal.style.opacity = 0;
    
    // Fade-in effect
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            modal.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 20); //  interval for a smoother or faster effect
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

var currentImageIndices = {};

function updateCurrentImageIndex(modalContent, index) {
    const modalId = modalContent.getAttribute('id');
    currentImageIndices[modalId] = index;
}

function updateMainImage(mainImage, modalContent, index) {
    const thumbnails = modalContent.querySelectorAll('.thumbnail');
    mainImage.src = thumbnails[index].src;
    mainImage.alt = thumbnails[index].alt; 
}

function changeImage(mainImage, thumbnails, direction) {
    const modalContent = mainImage.closest('.modal-content');
    const modalId = modalContent.getAttribute('id');
    let currentImageIndex = currentImageIndices[modalId] || 0;

    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = thumbnails.length - 1;
    } else if (currentImageIndex >= thumbnails.length) {
        currentImageIndex = 0;
    }

    currentImageIndices[modalId] = currentImageIndex;
    updateMainImage(mainImage, modalContent, currentImageIndex);
}