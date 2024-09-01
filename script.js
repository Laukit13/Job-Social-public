// Listing data
const featuredListings = [
    { image: "image/Guide1.png", title: "How to Find Flatmates Fast Within 2 Days" },
    { image: "image/Guide2.png", title: "How to be Safe when Flat Hunting" },
    { image: "image/Guide3.png", title: "Top 10 Areas for Flatmates in Bangalore" },
    { image: "image/Guide4.png", title: "How to Save Money on Rent" },
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
        location: "Near Metro, JP Nagar",
        price: "Rent : ₹14,500",
        image: "image/jpnagar1.png"
    },
    {
        title: "🏠 Private Room in 2BHK",
        location: "Domlur, Indiranagar",
        price: "₹17,000",
        image: "image/indiranagar2.png"
    },
];

// Function to create feature cards
function createFeatureCard(listing) {
    return `
        <div class="feature-card" style="background-image: url('${listing.image}');">
            </div>
        </div>
    `;
}

// Function to create area cards
function createAreaCard(listing) {
    return `
        <div class="area-card" onclick="openExpandedView(this)">
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
                    <div class="area-location">${listing.location}</div>
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
    const expandedView = document.getElementById('expandedView');
    const title = card.querySelector('.area-title').textContent;
    const location = card.querySelector('.area-location').textContent;
    const price = card.querySelector('.area-price').textContent;
    const image = card.querySelector('.area-image').src;
    
    document.getElementById('galleryImage').src = image;
    document.getElementById('listingTitle').textContent = title;
    document.getElementById('listingPrice').textContent = price;
    
    expandedView.classList.add('active');
}

// Close expanded view
function closeExpandedView() {
    const expandedView = document.getElementById('expandedView');
    expandedView.classList.remove('active');
}

// Image gallery functionality
const galleryImage = document.querySelector('.gallery-image');
const galleryDots = document.querySelectorAll('.gallery-dot');
let currentImageIndex = 0;

function updateGallery() {
    galleryDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % areaListings.length;
    galleryImage.src = areaListings[currentImageIndex].image;
    updateGallery();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + areaListings.length) % areaListings.length;
    galleryImage.src = areaListings[currentImageIndex].image;
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

// Initialize gallery dots
updateGallery();

// Add event listeners for gallery navigation
document.querySelector('.back-button').addEventListener('click', closeExpandedView);
document.querySelector('.favorite-button').addEventListener('click', () => {
    // Implement favorite functionality here
    console.log('Favorite button clicked');
});

// Optional: Implement scroll-based loading for area listings
let page = 1;
const loadMoreThreshold = 100; // pixels from bottom of page

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - loadMoreThreshold) {
        loadMoreListings();
    }
});

function loadMoreListings() {
    // Implement API call or data loading logic here
    console.log('Loading more listings...');
    // Example: 
    // fetchMoreListings(page++).then(newListings => {
    //     newListings.forEach(listing => {
    //         areaCardsContainer.innerHTML += createAreaCard(listing);
    //     });
    // });
}