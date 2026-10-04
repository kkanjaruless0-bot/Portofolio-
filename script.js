// Efek Scroll Reveal
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            // Opsional: hapus else jika ingin elemen tetap terlihat setelah muncul
            // reveals[i].classList.remove('active'); 
        }
    }
}

// Panggil sekali saat load agar elemen yang sudah terlihat langsung muncul
reveal();
