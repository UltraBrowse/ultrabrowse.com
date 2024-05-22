document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('learn-more').addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
    });
});
