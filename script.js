// Listing data
const featuredListings = [
    {
       image: "image/Guide1.png"
    },

    {
       image: "image/Guide2.png"
    },

    {
        image: "image/Guide3.png"
     },
    // Add more featured listings here
];




const areaListings = [
    {
        title: "Male Flatmate - 2BHK",
        location: "Domlur, Indiranagar",
        price: "Rent : ₹17,000",
        image: "image/indiranagar1.png"
    },

    {
        title: "Female Flatmate - 3BHK",
        location: "Near Metro,JP Nagar",
        price: "Rent : ₹14,500",
        image: "image/jpnagar1.png"
    },

    {
        title: "🏠 Private Room in 2BHK",
        location: "Domlur, Indiranagar",
        price: "₹17,000",
        image: "image/indiranagar2.png"
    },
    // Add more area listings here
];

// Function to create feature cards
function createFeatureCard(listing) {
    return `
        <div class="feature-card" style="background-image: url('${listing.image}');">
            <div class="card-content">
                </div>
            </div>
        </div>
    `;
}

// Function to create area cards
function createAreaCard(listing) {
    return `
        <div class="area-card" onclick="openExpandedView(this, event)">
            <div style="position: relative;">
                <img src="${listing.image}" alt="${listing.title}" class="area-image">
                <div class="area-icons">
                    <div class="area-icon">📷</div>
                    <div class="area-icon">❤️</div>
                </div>
            </div>
            <div class="area-content">
                <div class="area-info">
                    <div class="area-title">${listing.title}</div>
                    <div class="area-location">
                        ${listing.location}
                    </div>
                    <div class="area-price">${listing.price}</div>
                </div>
                <a href="tel:+918129917227" class="area-cta" onclick="event.stopPropagation()">Call Now</a>
            </div>
        </div>
    `;
}

// Populate listings
document.addEventListener('DOMContentLoaded', () => {
    const featureCardsContainer = document.getElementById('featureCards');
    const areaCardsContainer = document.getElementById('areaCards');

    featuredListings.forEach(listing => {
        featureCardsContainer.innerHTML += createFeatureCard(listing);
    });

    areaListings.forEach(listing => {
        areaCardsContainer.innerHTML += createAreaCard(listing);
    });
});

// Open expanded view
function openExpandedView(card) {
    document.getElementById('listingPage').style.display = 'none';
    document.getElementById('expandedView').style.display = 'block';
    
    const title = card.querySelector('.area-title').textContent;
    const location = card.querySelector('.area-location').textContent;
    const price = card.querySelector('.area-price').textContent;
    
    document.querySelector('#expandedView .listing-title').textContent = title;
    document.querySelector('#expandedView .listing-location').textContent = location;
    document.querySelector('#expandedView .listing-price').textContent = price;
}

// Close expanded view
function closeExpandedView() {
    document.getElementById('expandedView').style.display = 'none';
    document.getElementById('listingPage').style.display = 'block';
}

// Image gallery functionality
const galleryImage = document.querySelector('.gallery-image');
const galleryDots = document.querySelectorAll('.gallery-dot');
const images = ['path_to_image1.jpg', 'path_to_image2.jpg', 'path_to_image3.jpg']; // Replace with actual image URLs
let currentImageIndex = 0;

function updateGallery() {
    galleryImage.src = images[currentImageIndex];
    galleryDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
}

// Add touch event listeners for swiping
let touchStartX = 0;
let touchEndX = 0;

galleryImage.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

galleryImage.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        nextImage();
    } else if (touchEndX - touchStartX > 50) {
        prevImage();
    }
});