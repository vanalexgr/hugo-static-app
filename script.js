document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Logic
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

    // Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 45, 98, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    // --- CHART CONFIGURATION (UPDATED FOR MOBILE) ---
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
                maintainAspectRatio: false, // <--- CHANGED TO FALSE FOR MOBILE
                plugins: {
                    title: {
                        display: true,
                        text: 'AI vs. Human Expert Performance',
                        color: '#FFFFFF',
                        font: { family: "'Inter', sans-serif", size: 16, weight: '600' },
                        padding: { bottom: 20 }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#FFFFFF',
                            font: { family: "'Inter', sans-serif", size: 12 }, // Smaller font for mobile
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
                            text: 'Score (%)',
                            color: '#FFFFFF',
                            font: { family: "'Inter', sans-serif", size: 12 }
                        },
                        ticks: { color: 'rgba(255, 255, 255, 0.8)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: 'rgba(255, 255, 255, 0.8)' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Animation Logic
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

    // Smooth Scrolling
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