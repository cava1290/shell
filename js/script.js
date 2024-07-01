document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript yüklendi ve çalışıyor!");
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Basit doğrulama
        if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }

        // Formu gönderme animasyonu
        form.style.transition = 'transform 0.3s';
        form.style.transform = 'scale(0.8)';
        
        setTimeout(function () {
            alert('Mesajınız başarıyla gönderildi!');
            form.style.transform = 'scale(1)';
            form.reset();
        }, 300);
    });
});
