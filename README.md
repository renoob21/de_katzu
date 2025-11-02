# DeKatzu

Proyek web untuk promosi UMKM

## SEO Actions

Berikut adalah langkah-langkah optimasi mesin pencari (SEO) yang telah dilakukan pada situs web De Katzu:

### 1. Refactoring dari Single-Page Application (SPA) ke Multi-Page Application (MPA)

- **Struktur Halaman:** Situs web diubah dari satu halaman (`index.html`) menjadi beberapa file HTML terpisah (`index.html`, `produk.html`, `tentang.html`, dan beberapa halaman blog). Ini memungkinkan setiap halaman untuk memiliki konten, judul, dan meta tag yang unik, sehingga lebih mudah diindeks oleh mesin pencari seperti Google.
- **Direktori Blog:** Halaman-halaman yang berisi artikel blog kini ditempatkan dalam direktori `/blog/`, memberikan struktur URL yang jelas dan logis (contoh: `.../blog/tips-menyimpan-frozen-food.html`).

### 2. Implementasi Meta Tag Spesifik per Halaman

Setiap halaman kini dilengkapi dengan meta tag yang unik dan relevan dengan kontennya untuk meningkatkan visibilitas di hasil pencarian:

- **`<title>`:** Judul halaman yang deskriptif dan mengandung kata kunci utama (contoh: "De Katzu - Frozen Food Rumahan Rasa Restoran").
- **`<meta name="description">`:** Deskripsi singkat yang merangkum isi halaman dan menarik pengguna untuk mengklik.
- **`<meta name="keywords">`:** Kata kunci yang relevan dengan konten halaman untuk membantu mesin pencari memahami topik halaman.

### 3. Penambahan Open Graph (OG) Tags

Untuk meningkatkan tampilan saat dibagikan di media sosial (seperti Facebook, WhatsApp, dan Twitter), setiap halaman telah ditambahkan tag Open Graph:

- **`og:title`:** Judul yang akan muncul saat link dibagikan.
- **`og:description`:** Deskripsi singkat yang menyertai link.
- **`og:image`:** Gambar thumbnail yang representatif.
- **`og:url`:** URL kanonis dari halaman tersebut.
- **`twitter:card`:** Mengatur jenis kartu yang akan ditampilkan di Twitter (menggunakan `summary_large_image` untuk visual yang lebih menarik).

### 4. Implementasi Schema.org (Structured Data)

Schema markup ditambahkan untuk memberikan konteks yang lebih kaya kepada mesin pencari mengenai isi dari setiap halaman. Ini membantu dalam menampilkan *rich snippets* di hasil pencarian.

- **Halaman Utama:** Menggunakan skema `WebSite` untuk mengidentifikasi situs secara keseluruhan.
- **Halaman Produk:** Menggunakan skema `ItemList` dan `Product` untuk mendeskripsikan daftar produk yang dijual, termasuk nama, harga, deskripsi, dan ketersediaan.
- **Halaman Tentang Kami:** Menggunakan skema `AboutPage` dan `Organization` untuk memberikan informasi detail mengenai De Katzu sebagai sebuah bisnis.
- **Halaman Blog:** Setiap artikel blog menggunakan skema `BlogPosting` yang mencakup judul, penulis, tanggal publikasi, dan deskripsi artikel.

Dengan adanya perubahan ini, situs De Katzu menjadi lebih ramah SEO, lebih mudah ditemukan, dan lebih menarik saat dibagikan di berbagai platform digital.
