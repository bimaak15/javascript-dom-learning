// ================================================================
// SCRIPT.JS — Tutorial Interaktif Belajar JavaScript DOM
// ================================================================
// File ini berisi semua fungsi demo untuk tutorial DOM.
// Setiap fungsi diberi komentar penjelasan agar mudah dipahami.
// ================================================================


// ================================================================
// ▶ SECTION 1: getElementById
// ================================================================
// getElementById() digunakan untuk mengambil SATU elemen HTML
// berdasarkan atribut "id" yang kita berikan di HTML.
//
// Sintaks: document.getElementById("namaId")
// Return : Satu elemen HTML, atau null jika tidak ditemukan
// ================================================================

function demoGetElementById() {
    // Langkah 1: Ambil elemen <h3> yang punya id="demo-heading"
    let heading = document.getElementById("demo-heading");

    // Langkah 2: Ubah teksnya menggunakan .innerText
    heading.innerText = "✅ Teks ini diubah oleh getElementById!";

    // Langkah 3: Ambil juga elemen <p> dan ubah
    let paragraf = document.getElementById("demo-paragraph");
    paragraf.innerText = "Paragraf ini juga berhasil diubah! 🎉";

    // Tampilkan log hasil
    document.getElementById("result-1").innerText =
        "getElementById berhasil! Heading dan paragraf sudah berubah.";
}

// Fungsi untuk mereset demo 1 ke kondisi awal
function resetDemo1() {
    document.getElementById("demo-heading").innerText = "Halo! Saya heading asli.";
    document.getElementById("demo-paragraph").innerText = "Saya paragraf yang bisa diubah.";
    document.getElementById("result-1").innerText = "Klik tombol di atas untuk melihat hasilnya...";
}


// ================================================================
// ▶ SECTION 2: querySelector & querySelectorAll
// ================================================================
// querySelector()    → Ambil SATU elemen pertama yang cocok
// querySelectorAll() → Ambil SEMUA elemen yang cocok (NodeList)
//
// Kelebihannya: Bisa pakai selector CSS apa saja!
//   - "#id"        → berdasarkan ID
//   - ".class"     → berdasarkan class
//   - "tag"        → berdasarkan nama tag
//   - "div .child" → selector yang lebih kompleks
// ================================================================

function demoQuerySelector() {
    // querySelectorAll(".buah") → Ambil SEMUA elemen yang punya class="buah"
    // Hasilnya berupa NodeList (seperti array/daftar)
    let semuaBuah = document.querySelectorAll(".buah");

    // Gunakan forEach untuk mengulang setiap elemen dalam NodeList
    // forEach artinya: "untuk setiap elemen, jalankan fungsi ini"
    semuaBuah.forEach(function (buah, index) {
        // Parameter "buah" = elemen saat ini
        // Parameter "index" = urutan (0, 1, 2, 3...)

        // Ubah warna teks
        buah.style.color = "#00d2ff";
        buah.style.fontWeight = "bold";
        buah.style.fontSize = "1.1rem";

        // Tambahkan border
        buah.style.padding = "8px 14px";
        buah.style.border = "1px solid rgba(0, 210, 255, 0.3)";
        buah.style.borderRadius = "8px";
        buah.style.display = "inline-block";
        buah.style.margin = "4px";
    });

    // Tampilkan log
    document.getElementById("result-2").innerText =
        "querySelectorAll berhasil! " + semuaBuah.length + " elemen buah ditemukan dan diubah.";
}

// Fungsi reset demo 2
function resetDemo2() {
    let semuaBuah = document.querySelectorAll(".buah");
    semuaBuah.forEach(function (buah) {
        buah.style.color = "";
        buah.style.fontWeight = "";
        buah.style.fontSize = "";
        buah.style.padding = "";
        buah.style.border = "";
        buah.style.borderRadius = "";
        buah.style.display = "";
        buah.style.margin = "";
    });
    document.getElementById("result-2").innerText = "Klik tombol untuk mengubah warna semua buah...";
}


// ================================================================
// ▶ SECTION 3: Mengubah Konten (innerText vs innerHTML)
// ================================================================
// innerText  → Mengubah konten sebagai TEKS BIASA
//              Tag HTML akan ditampilkan sebagai teks, bukan dirender
//
// innerHTML  → Mengubah konten sebagai HTML
//              Tag HTML akan dirender/dijalankan oleh browser
//
// textContent → Mirip innerText tapi mengambil semua teks
//               termasuk yang disembunyikan dengan CSS
// ================================================================

function demoInnerText() {
    let kotak = document.getElementById("kotak-konten");

    // innerText: Tag HTML akan ditampilkan sebagai teks biasa
    // Perhatikan <strong> TIDAK akan menjadi tebal, tapi tampil sebagai teks
    kotak.innerText = "Ini pakai innerText 📝\n<strong>Tag ini terlihat sebagai teks biasa!</strong>";

    document.getElementById("result-3").innerText =
        "innerText digunakan! Perhatikan tag <strong> tampil sebagai teks biasa, tidak dirender.";
}

function demoInnerHTML() {
    let kotak = document.getElementById("kotak-konten");

    // innerHTML: Tag HTML akan dirender oleh browser
    // <strong> akan membuat teks menjadi tebal
    // <span style="..."> akan memberi warna
    kotak.innerHTML = 'Ini pakai <strong style="color: #00d2ff;">innerHTML</strong> 🎨<br>' +
        '<em style="color: #ff6b6b;">Tag HTML dirender dengan benar!</em>';

    document.getElementById("result-3").innerText =
        "innerHTML digunakan! Perhatikan tag HTML dirender — teks jadi tebal dan berwarna.";
}

// Fungsi reset demo 3
function resetDemo3() {
    document.getElementById("kotak-konten").innerText =
        "Ini adalah konten awal. Klik tombol di bawah untuk mengubah saya!";
    document.getElementById("result-3").innerText =
        "Klik salah satu tombol untuk melihat perbedaannya...";
}


// ================================================================
// ▶ SECTION 4: Mengubah Style (CSS via JavaScript)
// ================================================================
// Kita bisa mengubah CSS elemen menggunakan: elemen.style.property
//
// PENTING: Nama property CSS yang menggunakan tanda hubung (-)
// harus ditulis dalam format camelCase di JavaScript:
//
//   CSS                → JavaScript
//   background-color   → backgroundColor
//   font-size          → fontSize
//   border-radius      → borderRadius
//   margin-top         → marginTop
//   box-shadow         → boxShadow
// ================================================================

function demoUbahStyle() {
    let kotak = document.getElementById("style-box");

    // Ubah background menjadi warna merah
    kotak.style.backgroundColor = "#ff6b6b";

    // Ubah ukuran
    kotak.style.width = "200px";
    kotak.style.height = "200px";

    // Ubah bentuk menjadi lingkaran (border-radius: 50%)
    kotak.style.borderRadius = "50%";

    // Ubah teks
    kotak.innerText = "Lingkaran! 🔴";

    document.getElementById("result-4").innerText =
        "Style berubah! backgroundColor → merah, borderRadius → 50% (lingkaran), ukuran → 200px.";
}

function demoUbahStyleLagi() {
    let kotak = document.getElementById("style-box");

    // Ubah ke style yang berbeda
    kotak.style.backgroundColor = "#51cf66";
    kotak.style.width = "250px";
    kotak.style.height = "100px";
    kotak.style.borderRadius = "16px";
    kotak.style.boxShadow = "0 0 30px rgba(81, 207, 102, 0.5)";

    kotak.innerText = "Berbeda lagi! 🟢";

    document.getElementById("result-4").innerText =
        "Style berubah lagi! Sekarang hijau, persegi panjang, dan ada boxShadow.";
}

// Fungsi reset demo 4
function resetDemo4() {
    let kotak = document.getElementById("style-box");
    kotak.style.backgroundColor = "";
    kotak.style.width = "";
    kotak.style.height = "";
    kotak.style.borderRadius = "";
    kotak.style.boxShadow = "";
    kotak.innerText = "Klik Tombol! ⬇️";
    document.getElementById("result-4").innerText =
        "Klik tombol untuk mengubah tampilan kotak...";
}


// ================================================================
// ▶ SECTION 5: Event Listener
// ================================================================
// Event listener digunakan untuk "mendengarkan" aksi dari user.
//
// Sintaks: elemen.addEventListener("namaEvent", fungsiCallback)
//
// Jenis-jenis event yang sering dipakai:
//   "click"     → Saat elemen diklik
//   "dblclick"  → Saat elemen di-double click
//   "mouseover" → Saat mouse masuk ke area elemen
//   "mouseout"  → Saat mouse keluar dari area elemen
//   "input"     → Saat user mengetik di input/textarea
//   "keydown"   → Saat user menekan tombol keyboard
//   "submit"    → Saat form di-submit
// ================================================================

// Kita menambahkan event listener setelah halaman selesai dimuat.
// window.onload memastikan semua elemen HTML sudah tersedia.
window.onload = function () {
    setupEventDemo();
    setupTodoEnter();
};

function setupEventDemo() {
    // ---- Event: Click ----
    let kotakEvent = document.getElementById("event-demo-box");

    // Variabel untuk melacak state (kondisi saat ini)
    let sudahDiklik = false;

    kotakEvent.addEventListener("click", function () {
        // Toggle (bergantian) antara dua state
        if (!sudahDiklik) {
            kotakEvent.style.background = "linear-gradient(135deg, #51cf66, #20c997)";
            kotakEvent.innerText = "Diklik! ✅ Klik lagi!";
            document.getElementById("result-5").innerText =
                'Event "click" terdeteksi! Kotak berubah hijau. Klik lagi untuk kembalikan.';
        } else {
            kotakEvent.style.background = "linear-gradient(135deg, #7b2ff7, #ff6b6b)";
            kotakEvent.innerText = "🖱️ Klik Saya!";
            document.getElementById("result-5").innerText =
                "Kotak kembali ke semula. Klik lagi untuk mengubah!";
        }
        sudahDiklik = !sudahDiklik; // Toggle: true → false, false → true
    });

    // ---- Event: Mouseover (hover masuk) ----
    kotakEvent.addEventListener("mouseover", function () {
        kotakEvent.style.transform = "scale(1.05)";
        kotakEvent.style.boxShadow = "0 8px 30px rgba(123, 47, 247, 0.4)";
    });

    // ---- Event: Mouseout (hover keluar) ----
    kotakEvent.addEventListener("mouseout", function () {
        kotakEvent.style.transform = "scale(1)";
        kotakEvent.style.boxShadow = "none";
    });

    // ---- Event: Input (mengetik) ----
    let inputField = document.getElementById("event-input");
    let mirror = document.getElementById("input-mirror");

    inputField.addEventListener("input", function () {
        // Setiap kali user mengetik, teks yang diketik ditampilkan di samping
        // "this.value" berarti "nilai saat ini dari input ini"
        if (this.value.length > 0) {
            mirror.innerText = "Kamu menulis: " + this.value;
        } else {
            mirror.innerText = "...";
        }

        document.getElementById("result-5").innerText =
            'Event "input" terdeteksi! Teks: "' + this.value + '" (' + this.value.length + " karakter)";
    });
}

// Fungsi reset demo 5
function resetDemo5() {
    let kotakEvent = document.getElementById("event-demo-box");
    kotakEvent.style.background = "linear-gradient(135deg, #7b2ff7, #ff6b6b)";
    kotakEvent.style.transform = "scale(1)";
    kotakEvent.style.boxShadow = "none";
    kotakEvent.innerText = "🖱️ Klik Saya!";

    document.getElementById("event-input").value = "";
    document.getElementById("input-mirror").innerText = "...";
    document.getElementById("result-5").innerText =
        "Coba klik kotak ungu di atas, atau ketik di input...";
}


// ================================================================
// ▶ SECTION 6: Membuat & Menghapus Elemen
// ================================================================
// createElement()  → Membuat elemen HTML baru (belum muncul di halaman)
// appendChild()    → Memasukkan elemen ke dalam elemen parent
// remove()         → Menghapus elemen dari halaman
//
// Langkah membuat elemen baru:
//   1. let el = document.createElement("tag")    → Buat
//   2. el.innerText = "konten"                   → Isi konten
//   3. el.className = "nama-class"               → Beri class
//   4. parent.appendChild(el)                     → Masukkan ke halaman
// ================================================================

// Variabel counter untuk memberi nomor unik pada setiap item baru
let itemCounter = 1;

function demoTambahElemen() {
    itemCounter++;

    // Langkah 1: Buat elemen <span> baru
    let kartuBaru = document.createElement("span");

    // Langkah 2: Beri konten teks
    // Emoji acak untuk variasi
    let emojis = ["🌟", "📌", "🎯", "💡", "🔥", "⚡", "🎁", "🏆", "🎵", "🌈"];
    let emojiAcak = emojis[Math.floor(Math.random() * emojis.length)];
    kartuBaru.innerText = emojiAcak + " Item #" + itemCounter;

    // Langkah 3: Beri class CSS agar tampil cantik
    kartuBaru.className = "item-card";

    // Langkah 4: Masukkan elemen baru ke dalam container (parent)
    let daftarItem = document.getElementById("daftar-item");
    daftarItem.appendChild(kartuBaru);

    // Log
    document.getElementById("result-6").innerText =
        "createElement + appendChild berhasil! Item #" + itemCounter + " ditambahkan.";
}

function demoHapusElemen() {
    let daftarItem = document.getElementById("daftar-item");

    // lastElementChild = elemen anak terakhir
    // Kita hapus elemen anak terakhir (jika ada)
    if (daftarItem.lastElementChild) {
        let namaItem = daftarItem.lastElementChild.innerText;

        // remove() → Menghapus elemen dari halaman
        daftarItem.lastElementChild.remove();

        document.getElementById("result-6").innerText =
            'remove() berhasil! "' + namaItem + '" dihapus.';
    } else {
        document.getElementById("result-6").innerText =
            "Tidak ada item lagi untuk dihapus!";
    }
}

// Fungsi reset demo 6
function resetDemo6() {
    let daftarItem = document.getElementById("daftar-item");
    daftarItem.innerHTML = '<span class="item-card">📦 Item Awal</span>';
    itemCounter = 1;
    document.getElementById("result-6").innerText =
        "Klik tombol untuk menambah atau menghapus item...";
}


// ================================================================
// ▶ SECTION 7: Latihan — To-Do List Mini
// ================================================================
// Ini adalah latihan yang menggabungkan semua konsep DOM:
//   - getElementById → Mengambil input dan container
//   - createElement  → Membuat item todo baru
//   - appendChild    → Memasukkan item ke daftar
//   - addEventListener → Mendeteksi klik tombol hapus & Enter
//   - remove()       → Menghapus item todo
// ================================================================

function tambahTodo() {
    // Ambil elemen input
    let inputTodo = document.getElementById("todo-input");

    // Ambil nilai yang diketik user (.value)
    let teks = inputTodo.value.trim(); // .trim() menghapus spasi di awal/akhir

    // Validasi: Jika kosong, jangan tambahkan
    if (teks === "") {
        document.getElementById("result-7").innerText =
            "⚠️ Tulis sesuatu dulu sebelum menambahkan!";
        inputTodo.focus(); // .focus() membuat cursor kembali ke input
        return; // Hentikan fungsi di sini
    }

    // Hapus pesan "Belum ada tugas" jika masih ada
    let pesanKosong = document.getElementById("todo-empty");
    if (pesanKosong) {
        pesanKosong.remove();
    }

    // ---- Buat elemen <li> baru ----
    let itemBaru = document.createElement("li");

    // Buat span untuk teks todo
    let spanTeks = document.createElement("span");
    spanTeks.className = "todo-text";
    spanTeks.innerText = teks;

    // Buat tombol hapus
    let tombolHapus = document.createElement("button");
    tombolHapus.innerText = "Hapus";
    tombolHapus.className = "btn-hapus";

    // Tambahkan event listener ke tombol hapus
    tombolHapus.addEventListener("click", function () {
        // Menghapus item <li> yang merupakan parent dari tombol ini
        // this.parentElement = elemen <li> yang berisi tombol ini
        itemBaru.remove();

        // Cek apakah daftar masih ada isinya
        let daftarTodo = document.getElementById("todo-list");
        if (daftarTodo.children.length === 0) {
            // Jika sudah kosong, tampilkan pesan kosong
            let pesan = document.createElement("p");
            pesan.className = "todo-empty";
            pesan.id = "todo-empty";
            pesan.innerText = "Belum ada tugas. Coba tambahkan! 👆";
            daftarTodo.appendChild(pesan);
        }

        document.getElementById("result-7").innerText =
            '🗑️ Tugas "' + teks + '" berhasil dihapus!';
    });

    // Susun elemen: masukkan span dan tombol ke dalam <li>
    itemBaru.appendChild(spanTeks);
    itemBaru.appendChild(tombolHapus);

    // Masukkan <li> ke dalam <ul> (daftar todo)
    document.getElementById("todo-list").appendChild(itemBaru);

    // Kosongkan input dan fokuskan kembali
    inputTodo.value = "";
    inputTodo.focus();

    // Log
    document.getElementById("result-7").innerText =
        '✅ Tugas "' + teks + '" berhasil ditambahkan!';
}

// Tambahkan fitur: Tekan Enter untuk menambah todo
function setupTodoEnter() {
    let inputTodo = document.getElementById("todo-input");

    inputTodo.addEventListener("keydown", function (event) {
        // event.key berisi tombol yang ditekan
        // Jika tombol yang ditekan adalah "Enter", jalankan tambahTodo()
        if (event.key === "Enter") {
            tambahTodo();
        }
    });
}


// ================================================================
// 🎓 RINGKASAN MATERI DOM:
// ================================================================
//
// 1. MENGAMBIL ELEMEN:
//    - document.getElementById("id")         → By ID (satu elemen)
//    - document.querySelector(".class")      → By CSS selector (satu)
//    - document.querySelectorAll(".class")    → By CSS selector (semua)
//
// 2. MENGUBAH KONTEN:
//    - elemen.innerText  → Ubah teks biasa
//    - elemen.innerHTML  → Ubah konten HTML
//    - elemen.textContent → Ambil/ubah semua teks
//
// 3. MENGUBAH STYLE:
//    - elemen.style.property = "value"
//    - Gunakan camelCase: backgroundColor, fontSize, dll.
//
// 4. EVENT LISTENER:
//    - elemen.addEventListener("event", function)
//    - Events: click, input, mouseover, mouseout, keydown, dll.
//
// 5. MEMBUAT & MENGHAPUS:
//    - document.createElement("tag")         → Buat elemen baru
//    - parent.appendChild(elemen)            → Tambahkan ke halaman
//    - elemen.remove()                       → Hapus dari halaman
//
// ================================================================