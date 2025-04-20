document.addEventListener('DOMContentLoaded', function() {
    // Add hamburger menu toggle functionality
    const menuToggle = document.querySelector('.nav-menu-toggle');
    const mainNav = document.querySelector('.main-nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show-mobile-menu');
        });
    }

    // Mobile navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.nav-links');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Handle window resize to hide mobile menu when switching to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991 && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
    
    // Search functionality
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // In a real implementation, this would redirect to a search results page
            // window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }
    
    // Auto-update "live" timestamps
    function updateTimestamps() {
        const timestamps = document.querySelectorAll('.news-time');
        const now = new Date();
        
        timestamps.forEach(timestamp => {
            const timeText = timestamp.textContent;
            if (timeText.includes('hours ago')) {
                const hours = parseInt(timeText.split(' ')[0]);
                if (hours) {
                    timestamp.setAttribute('data-time', hours);
                }
            }
        });
    }
    
    // Initialize any carousels or sliders (if needed)
    initializeSliders();
    
    // Initialize timestamps
    updateTimestamps();
});

// Function to initialize any sliders or carousels
function initializeSliders() {
    // This would typically use a carousel plugin like Swiper or Slick
    // For simplicity, we're not implementing actual carousel functionality
    console.log('Sliders initialized');
}

// Function to display breaking news banner (can be triggered by server events in a real application)
function showBreakingNews(title, link) {
    const banner = document.createElement('div');
    banner.className = 'breaking-news-banner';
    banner.innerHTML = `
        <div class="container-fluid">
            <div class="breaking-content">
                <span class="breaking-label">BREAKING</span>
                <p>${title}</p>
                <a href="${link || '#'}" class="breaking-link">Read more</a>
                <button class="close-breaking">&times;</button>
            </div>
        </div>
    `;
    
    document.body.insertBefore(banner, document.body.firstChild);
    
    const closeButton = banner.querySelector('.close-breaking');
    closeButton.addEventListener('click', function() {
        banner.remove();
    });
}

// Example of how to trigger breaking news (would be triggered by server-side events in production)
// setTimeout(() => {
//     showBreakingNews('Major development in international diplomacy as peace talks begin', '/news/world/12345');
// }, 5000);
