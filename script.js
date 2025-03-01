document.addEventListener('DOMContentLoaded', () => {

        document.getElementById("dulohupa").setAttribute("onclick", "window.open('dulohupa.html')");
        document.getElementById("polopalo").setAttribute("onclick", "window.open('polopalo.html')");
        document.getElementById("kuliner").setAttribute("onclick", "window.open('binte-biluhuta.html')");
        document.getElementById("budaya").setAttribute("onclick", "window.open('budaya.html')");
    
    // Animasi scroll
    const sections = document.querySelectorAll('.info-section');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Hover effect untuk info cards
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Menampilkan gambar dari assets
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        const imageType = placeholder.dataset.image;
        if (images[imageType]) {
            placeholder.style.backgroundSize = 'cover';
            placeholder.style.backgroundPosition = 'center';
        }
    });
}); 