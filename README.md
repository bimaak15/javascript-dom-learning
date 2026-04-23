# 🚀 Belajar JavaScript DOM

Tutorial interaktif untuk memahami cara JavaScript berinteraksi dengan halaman web.
Cocok untuk pemula yang ingin belajar DOM dari nol!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Deskripsi

**Belajar JavaScript DOM** adalah sebuah website tutorial interaktif yang mengajarkan dasar-dasar manipulasi DOM (Document Object Model) menggunakan JavaScript. Setiap materi dilengkapi dengan:

- ✅ Penjelasan konsep yang mudah dipahami
- ✅ Contoh kode dengan syntax highlighting
- ✅ Demo interaktif yang bisa langsung dicoba
- ✅ Latihan mini (To-Do List) untuk menguji pemahaman

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🎯 `getElementById` | Mengambil elemen berdasarkan ID |
| 🔍 `querySelector` | Mengambil elemen menggunakan CSS selector |
| ✏️ Mengubah Konten | Perbedaan `innerText`, `innerHTML`, `textContent` |
| 🎨 Mengubah Style | Manipulasi CSS melalui JavaScript |
| 🖱️ Event Listener | Menambahkan interaksi (click, hover, input) |
| ➕ Membuat & Menghapus | `createElement`, `appendChild`, `remove` |
| 📝 To-Do List Mini | Latihan gabungan semua konsep DOM |

## 📸 Preview

> Buka `index.html` di browser untuk melihat tampilan dark-themed modern dengan gradient dan animasi interaktif.

## 🛠️ Teknologi

- **HTML5** — Struktur halaman
- **CSS3** — Styling dengan dark theme, gradient, dan animasi
- **JavaScript (Vanilla)** — Logika interaktif dan manipulasi DOM
- **Google Fonts** — Inter & Fira Code

## 🚀 Instalasi

1. Clone repository ini:

   ```bash
   git clone https://github.com/username/javascript-dom.git
   ```

2. Masuk ke folder project:

   ```bash
   cd javascript-dom
   ```

3. Buka file `index.html` di browser:

   ```bash
   # Bisa langsung double-click file index.html
   # Atau gunakan Live Server di VS Code
   ```

> **Catatan:** Tidak memerlukan instalasi tambahan. Cukup buka di browser modern (Chrome, Firefox, Edge, dll).

## 📁 Struktur Project

```
javascript-dom/
├── index.html    # Halaman utama tutorial
├── style.css     # Styling dark theme modern
├── script.js     # Semua fungsi demo interaktif
└── README.md     # Dokumentasi project
```

## 💡 Penggunaan

1. Buka `index.html` di browser
2. Baca penjelasan setiap section
3. Klik tombol **"▶ Coba Jalankan"** untuk melihat demo
4. Gunakan tombol **"↺ Reset"** untuk mengembalikan ke kondisi awal
5. Coba latihan **To-Do List Mini** di section terakhir

### Contoh Kode

```javascript
// Mengambil elemen berdasarkan ID
let heading = document.getElementById("demo-heading");

// Mengubah teks elemen
heading.innerText = "Teks ini diubah oleh JavaScript! 🎉";

// Menambahkan event listener
heading.addEventListener("click", function() {
    alert("Heading diklik!");
});
```

## 📚 Materi yang Dipelajari

1. **getElementById** — Mengambil elemen by ID
2. **querySelector & querySelectorAll** — Mengambil elemen by CSS Selector
3. **innerText vs innerHTML** — Mengubah konten elemen
4. **element.style** — Mengubah style / CSS via JavaScript
5. **addEventListener** — Menambahkan interaksi (click, hover, input, keydown)
6. **createElement & remove** — Membuat dan menghapus elemen
7. **Latihan To-Do List** — Menggabungkan semua konsep

## 🤝 Kontribusi

Kontribusi sangat terbuka! Jika ingin menambahkan materi atau memperbaiki sesuatu:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📄 Lisensi

Project ini menggunakan lisensi [MIT](https://choosealicense.com/licenses/mit/).

## 🙋 Dukungan

Jika ada pertanyaan atau masalah, silakan buka [Issue](https://github.com/username/javascript-dom/issues) di repository ini.

---

Dibuat dengan ❤️ untuk belajar **JavaScript DOM** — Selamat Belajar! 🚀
