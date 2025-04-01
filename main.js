// main.js - Main JavaScript for HR Consultancy Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('no-scroll')) return;
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Load services dynamically
    const servicesGrid = document.querySelector('.services-grid');
    const services = [
        {
            icon: 'fas fa-user-tie',
            title: 'Recruitment',
            description: 'We find and attract the best talent for your organization through our extensive network and proven hiring strategies.'
        },
        {
            icon: 'fas fa-chalkboard-teacher',
            title: 'Training & Development',
            description: 'Customized training programs to enhance employee skills and drive organizational performance.'
        },
        {
            icon: 'fas fa-gavel',
            title: 'HR Compliance',
            description: 'Stay compliant with ever-changing labor laws and regulations with our expert guidance.'
        },
        {
            icon: 'fas fa-users-cog',
            title: 'HR Outsourcing',
            description: 'Comprehensive HR solutions tailored to your business needs, allowing you to focus on core operations.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Performance Management',
            description: 'Implement effective performance evaluation systems to drive employee engagement and productivity.'
        },
        {
            icon: 'fas fa-handshake',
            title: 'Employee Relations',
            description: 'Expert mediation and conflict resolution to maintain positive workplace relationships.'
        }
    ];
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
    
    // Load team members from JSON
    const teamMembersContainer = document.querySelector('.team-members');
    
    // In a real implementation, you would fetch this from a JSON file
    // For this example, we'll use a mock data object
    const teamData = [
        {
            "name": "Jennifer Smith",
            "position": "Senior HR Consultant",
            
            "image": "images/b3.jpg",
            "social": {
                "linkedin": "#",
                "twitter": "#"
            },
            "email": "jennifer@prohrsolutions.com"
        },
        {
            "name": "Robert Johnson",
            "position": "Recruitment Specialist",
            "image": "team2.jpg",
            "social": {
                "linkedin": "#",
                "twitter": "#"
            },
            "email": "robert@prohrsolutions.com"
        },
        {
            "name": "Emily Davis",
            "position": "Training Coordinator",
            "image": "team3.jpg",
            "social": {
                "linkedin": "#",
                "twitter": "#"
            },
            "email": "emily@prohrsolutions.com"
        },
        {
            "name": "Michael Brown",
            "position": "Compliance Officer",
            "image": "team4.jpg",
            "social": {
                "linkedin": "#",
                "twitter": "#"
            },
            "email": "michael@prohrsolutions.com"
        }
    ];
    
    // Process the team data
    teamData.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.innerHTML = `
            <div class="member-image">
                <img src="images/team/${member.image}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.position}</p>
                <div class="social-links">
                    <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="mailto:${member.email}"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        `;
        teamMembersContainer.appendChild(teamMember);
    });
    
    // Testimonial slider
    const testimonials = [
        {
            content: "ProHR transformed our recruitment process, helping us find top talent in half the time it used to take. Their expertise in our industry was evident from day one.",
            name: "Sarah Johnson",
            position: "CEO, TechSolutions Inc.",
            image: "client1.jpg"
        },
        {
            content: "The training programs developed by ProHR have significantly improved our team's performance. Their facilitators are engaging and the content is always relevant.",
            name: "Michael Chen",
            position: "HR Director, Global Retail",
            image: "client2.jpg"
        },
        {
            content: "As a small business, we didn't have dedicated HR staff. ProHR's outsourcing solution gave us access to expert support without the overhead costs.",
            name: "David Wilson",
            position: "Founder, GreenStart Organics",
            image: "client3.jpg"
        }
    ];
    
    const sliderContainer = document.querySelector('.slider-container');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;
    
    // Create testimonial slides
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="client-info">
                <div class="client-image">
                    <img src="images/testimonials/${testimonial.image}" alt="${testimonial.name}">
                </div>
                <h4>${testimonial.name}</h4>
                <p>${testimonial.position}</p>
            </div>
        `;
        sliderContainer.appendChild(slide);
        
        // Create dots
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.slide = index;
        dotsContainer.appendChild(dot);
        
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    const slides = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counter animation when stats section is in view
    const statsSection = document.querySelector('.about');
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            statsObserver.unobserve(statsSection);
        }
    });
    
    statsObserver.observe(statsSection);
});

// Form handling would be in form-handler.js