# Tugas React Native 2 - Bentuk Geometri dan 9 foto

## Fitur

-   **Grid Gambar 3x3:** Menampilkan grid 9 gambar unik.
-   **Pertukaran Gambar:** Setiap gambar memiliki versi alternatif. Mengetuk gambar akan beralih antara bentuk utama dan alternatifnya.
-   **Penskalaan Interaktif:** Saat gambar diketuk, gambar akan membesar 1,2 kali dari ukuran saat ini.
-   **Batas Penskalaan Progresif:** Gambar dapat membesar hingga maksimal 2 kali dari ukuran aslinya. Jika diketuk lagi setelah mencapai skala maksimum, gambar akan diatur ulang ke ukuran aslinya.
-   **Penskalaan Individual:** Hanya gambar yang diklik yang terpengaruh; gambar lain dalam grid tetap tidak berubah.
-   **Font Kustom:** Menggunakan font kustom ('NothingYouCouldDo-Regular') untuk elemen teks.
-   **Bentuk Geometri:** Mencakup segitiga dinamis, kotak nama, dan komponen "pil stambuk" untuk demonstrasi.

## Struktur Proyek

LAB-AKB-T2 

├── .expo/

├── .vscode/

├── app/

│   ├── components/

│   │   └── animeimages.tsx  

│   ├── _layout.tsx          

│   └── index.tsx            

├── assets/

│   ├── fonts/

│   │   └── NothingYouCouldDo-Regular.ttf

│   └── images/

│       ├── adaptive-icon.png

│       ├── favicon.png

│       ├── hasilbuil.png

│       ├── icon.png

│       ├── partial-react-logo.png

│       ├── react-logo.png

│       ├── react-logo@2x.png

│       ├── react-logo@3x.png

│       └── splash-icon.png

├── node_modules/

├── .gitignore

├── app.json

├── eslint.config.js

├── expo-env.d.ts

├── package-lock.json

├── package.json

├── README.md

└── tsconfig.json

## Pengaturan dan Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Kloning repositori:**
    ```bash
    git clone <URL-repositori>
    cd "LAB-AKB-T1 (COPY)"
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Mulai server pengembangan Expo:**
    ```bash
    npx expo start
    ```

    Ini akan membuka tab baru di browser Anda dengan Expo Dev Tools. Anda kemudian dapat:
    * Memindai kode QR dengan ponsel Anda menggunakan aplikasi Expo Go.
    * Menjalankan di emulator Android atau simulator iOS.
    * Menjalankan di browser web (meskipun fitur khusus seluler seperti `Dimensions` mungkin berperilaku berbeda).

## Penggunaan

* **Grid Gambar:** Layar utama menampilkan grid 3x3 gambar anime.
* **Ketuk untuk Berinteraksi:** Ketuk gambar mana pun di grid untuk:
    * Beralih antara gambar utama dan alternatifnya.
    * Membesarkannya sebesar 1,2x dari ukuran saat ini, hingga maksimal 2x.
    * Jika sudah pada skala 2x, mengetuknya akan mengaturnya ulang ke ukuran aslinya (1x).

## Teknologi yang Digunakan

* **React Native:** Kerangka kerja untuk membangun aplikasi seluler asli menggunakan React.
* **Expo:** Kerangka kerja dan platform untuk aplikasi React universal.
* **TypeScript:** Supersistem JavaScript yang diketik yang dikompilasi ke JavaScript biasa.
* **`react-native-reanimated` (untuk animasi):** (Meskipun `Animated` dari `react-native` saat ini digunakan, `react-native-reanimated` adalah alternatif umum dan kuat untuk animasi yang lebih kompleks. Proyek ini menggunakan API `Animated` bawaan.)

## Ucapan Terima Kasih

* Sumber gambar sebagian besar berasal dari Pinterest, seperti yang ditunjukkan oleh URL di `app/index.tsx`.
* Font kustom "NothingYouCouldDo-Regular" disertakan dalam `assets/fonts/`.

