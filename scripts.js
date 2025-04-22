// This file contains JavaScript functionality for the portfolio website, including interactive elements, form validation, or animations.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show contact links only on click
    const contactSection = document.querySelector(".contact");
    const contactLinks = document.querySelector(".contact-links");

    contactSection.addEventListener("click", () => {
        contactLinks.classList.toggle("hidden"); // Toggle visibility on click
    });

    // Copy to clipboard functionality
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`Copied: ${text}`);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    // Add event listeners for copying phone number and email
    const phoneLink = document.querySelector(".sticker.phone");
    const emailLink = document.querySelector(".sticker.email");

    phoneLink.addEventListener("click", (e) => {
        e.preventDefault();
        copyToClipboard("+966530246055");
    });

    emailLink.addEventListener("click", (e) => {
        e.preventDefault();
        copyToClipboard("zayanalkhalaf7@gmail.com");
    });

    const flipContainer = document.querySelector('.flip-container');
    const contactTrigger = document.querySelector('.contact-trigger');

    // Add click event to trigger the flipping effect
    contactTrigger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        flipContainer.classList.toggle('flipped');
    });

    // Add event listeners for card triggers
    document.querySelectorAll('.card-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('data-target');

            // Hide all card containers and reset flip state
            document.querySelectorAll('.card-container').forEach(container => {
                container.classList.remove('active');
                const card = container.querySelector('.card');
                if (card) {
                    card.classList.remove('is-flipped');
                }
            });

            // Show and flip the selected card container
            const targetCardContainer = document.getElementById(targetId);
            if (targetCardContainer) {
                targetCardContainer.classList.add('active');
                const card = targetCardContainer.querySelector('.card');
                if (card) {
                    card.classList.add('is-flipped');
                }
            }
        });
    });
});