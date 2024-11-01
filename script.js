let currentSlide = 0;
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const totalSlides = slides.length;

// Fungsi untuk menampilkan slide tertentu
function showSlide(n) {
    // Reset ke awal jika mencapai akhir
    if (n >= totalSlides) {
        currentSlide = 0;
    }
    // Reset ke akhir jika mencapai awal
    if (n < 0) {
        currentSlide = totalSlides - 1;
    }

    // Update posisi slide
    const slideContainer = document.getElementById('slideContainer');
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[currentSlide].classList.add('active');
}

// Fungsi untuk navigasi slide
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Auto slide setiap 5 detik
setInterval(nextSlide, 10000);

// Inisialisasi slide pertama
showSlide(currentSlide);

// Tambahkan event listener untuk keyboard
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    }
    if (e.key === 'ArrowRight') {
        nextSlide();
    }
});