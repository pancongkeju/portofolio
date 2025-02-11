// Animasi scroll smooth saat klik navigasi
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Handling sederhana untuk form kontak
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Terima kasih, pesanmu sudah terkirim! Aku akan segera membalas, ya.");
    this.reset();
  });

// Inisialisasi EmailJS dengan public key kamu
(function(){
    emailjs.init("t3I2jOavmZatisdUS"); // Ganti dengan public key EmailJS kamu
  })();
  
  // Handling form kontak dengan EmailJS
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_4hkjbko', 'template_qqpuqfo', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim!',
            text: 'Terima kasih, pesanmu sudah terkirim! Aku akan segera membalas, ya.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
      }, function(error) {
        console.log('FAILED...', error);
        Swal.fire({
            icon: 'error',
            title: 'Gagal Terkirim!',
            text: 'Oops, ada yang salah. Coba lagi ya!',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
      });
  
    //reset form setelah terkirim
    this.reset();
  });
  
