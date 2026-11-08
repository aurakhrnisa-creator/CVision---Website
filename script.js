// Interaksi menu untuk tampilan ponsel
const hamburger = document.getElementById('hamburger');
const links = document.getElementById('links');
hamburger.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('#links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// GANTI nomor contoh di bawah dengan nomor WhatsApp CVision.
// Gunakan format 62xxxxxxxxxx, tanpa tanda +, spasi, atau angka 0 di depan.
const WHATSAPP_NUMBER = '6281234567890';

// Tombol pesan pada kartu layanan akan otomatis memilih jenis layanan.
document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    const select = document.getElementById('service');
    const text = button.dataset.service.toLowerCase();
    if (text.includes('cv')) select.value = 'Pembuatan CV';
    else if (text.includes('ppt') || text.includes('presentation')) select.value = 'Desain PPT';
    else if (text.includes('custom')) select.value = 'Desain custom';
  });
});

document.getElementById('orderForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !message) return alert('Mohon lengkapi nama dan kebutuhan terlebih dahulu.');
  if (WHATSAPP_NUMBER === '6281234567890') {
    return alert('Ganti dulu WHATSAPP_NUMBER di script.js dengan nomor WhatsApp CVision milikmu.');
  }
  const text = `Halo CVision! Saya ${name}.\n\nSaya tertarik dengan: ${service}.\n\nKebutuhan saya: ${message}\n\nBoleh minta informasi lebih lanjut?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});
document.getElementById('year').textContent = new Date().getFullYear();
