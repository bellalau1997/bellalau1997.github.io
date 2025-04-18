document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // PDF Download functionality
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const element = document.querySelector('.container');
        const opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Show loading state
        downloadBtn.textContent = 'Generating PDF...';
        downloadBtn.disabled = true;

        html2pdf().set(opt).from(element).save().then(() => {
            // Reset button state
            downloadBtn.textContent = 'Download PDF';
            downloadBtn.disabled = false;
        });
    });

    // Add hover effects to skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.transition = 'width 0.5s ease-in-out';
        });
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 