# CVision Website

Website jasa profesional untuk pembuatan CV dan desain PPT.

## Isi folder
- `index.html` — struktur dan isi website.
- `style.css` — desain, warna, layout, dan tampilan responsif.
- `script.js` — menu ponsel, pilihan layanan, dan formulir WhatsApp.
- `assets/cvision-logo.jpg` — logo CVision yang disertakan jika tersedia.

## Cara menjalankan
1. Unduh dan ekstrak ZIP.
2. Buka folder `cvision_website` di Visual Studio Code.
3. Buka `index.html` di browser. Disarankan memasang ekstensi **Live Server**, lalu klik kanan `index.html` → **Open with Live Server**.
4. Website akan tampil di browser. Tidak perlu menginstal framework.

## Pengaturan sebelum dipublikasikan
1. Buka `script.js`.
2. Cari `const WHATSAPP_NUMBER = '6281234567890';`.
3. Ganti nomor contoh dengan nomor WhatsApp CVision, format kode negara 62 tanpa tanda +, spasi, atau angka 0 awal.
4. Edit harga contoh, deskripsi, dan informasi tim di `index.html`.
5. Untuk mengganti logo, ganti `assets/cvision-logo.jpg` dengan file logo milikmu dan gunakan nama file yang sama.

## Cara upload ke Vercel (gratis untuk proyek sederhana)
1. Buat repository baru di GitHub.
2. Upload seluruh isi folder proyek ke repository; pastikan `index.html` berada di root.
3. Login ke Vercel menggunakan akun GitHub.
4. Pilih **Add New → Project**, lalu import repository tersebut.
5. Untuk website HTML/CSS/JS biasa, pilih **Other** sebagai Framework Preset. Build Command dan Output Directory dapat dikosongkan.
6. Klik **Deploy**. Setelah selesai, Vercel memberikan alamat website publik.

## Catatan
Harga yang tampil adalah contoh awal, bukan harga final. Pastikan nomor WhatsApp dan semua informasi bisnis sudah diganti sebelum website dibagikan.
