# CekResi

![License](https://img.shields.io/badge/license-MIT-blue.svg)

**CekResi** adalah aplikasi pelacakan paket yang dibuat menggunakan ReactJS dan Tailwind CSS, serta menggunakan API dari Binderbyte. Aplikasi ini memungkinkan pengguna untuk melacak status pengiriman paket dari berbagai kurir dengan mudah.

## Fitur

- Pelacakan paket dari berbagai kurir seperti Shopee Express, JNE, J&T, dan lain-lain.
- Antarmuka pengguna yang responsif dan modern menggunakan Tailwind CSS.
- Penggunaan API Binderbyte untuk mendapatkan data pelacakan paket yang akurat dan real-time.

## Teknologi yang Digunakan

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Binderbyte API](https://binderbyte.com/)

## Instalasi

1. **Clone repositori ini**

   ```bash
   git clone https://github.com/vickymaulana/cekresi.git
   cd cekresi
   ```

2. **Instal dependensi menggunakan pnpm**

   Pastikan Anda memiliki Node.js dan pnpm terinstal di mesin Anda, kemudian jalankan perintah berikut:

   ```bash
   pnpm install
   ```

3. **Jalankan aplikasi**

   Untuk menjalankan aplikasi dalam mode pengembangan, jalankan:

   ```bash
   pnpm start
   ```

   Aplikasi akan terbuka secara otomatis di browser pada URL [http://localhost:3000](http://localhost:3000).

## Build

Untuk membangun aplikasi untuk produksi ke folder `build`, jalankan:

```bash
pnpm run build
```

Ini akan mengoptimalkan build untuk performa terbaik.

## Struktur Proyek

```plaintext
cekresi/
|-- public/
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.webp
|   |-- manifest.json
|-- src/
|   |-- api.js
|   |-- App.js
|   |-- index.js
|   |-- index.css
|   |-- TrackingForm.js
|-- package.json
|-- pnpm-lock.yaml
|-- README.md
```

## Kontribusi

Kami menerima kontribusi dari siapa pun. Jika Anda ingin berkontribusi, silakan fork repositori ini dan buat pull request dengan perubahan Anda. Pastikan untuk mengikuti panduan kontribusi kami.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

Dibuat dengan ❤️ oleh [Vicky Maulana](https://github.com/vickymaulana)