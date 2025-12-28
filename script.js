document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 45, 98, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    const chartCanvas = document.getElementById('benchmarkChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Accuracy', 'Completeness', 'Evidence Justification'],
                datasets: [
                    {
                        label: 'AI Companion App',
                        data: [90.5, 85, 95],
                        backgroundColor: '#007BFF',
                        borderRadius: 6,
                        barPercentage: 0.7,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'Committee Exemplars',
                        data: [77.8, 75, 70],
                        backgroundColor: '#8899AA',
                        borderRadius: 6,
                        barPercentage: 0.7,
                        categoryPercentage: 0.8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI vs. Human Expert Performance (Automated Evaluator)',
                        color: '#FFFFFF',
                        font: {
                            family: "'Inter', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#FFFFFF',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 13
                            },
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'rectRounded'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Performance Score (%)',
                            color: '#FFFFFF',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 13
                            }
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.mission-card, .stat-card, .feature, .process-step, .team-member').forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form submitted:', data);
            
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Request Sent!';
            button.style.background = '#28a745';
            
            contactForm.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    .animate-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-element.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);
