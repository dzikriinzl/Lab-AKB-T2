// app/index.tsx

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

// Import komponen gambar interaktif yang sudah kita pisahkan
// Pastikan nama file Anda sudah diubah menjadi InteractiveImage.tsx di folder components
import InteractiveImage from './components/InteractiveImage';

// Mencegah splash screen menghilang otomatis sampai font dimuat
SplashScreen.preventAutoHideAsync();

// Data gambar anime untuk grid
// PENTING: Saya telah MENGGANTI URL 'alt' dengan gambar yang berbeda agar terlihat perubahannya saat diklik.
// Pastikan Anda mengganti ini dengan URL gambar alternatif yang sebenarnya Anda inginkan.
const animeimages = [
  {
    main: "https://i.pinimg.com/736x/19/99/48/199948a4cee5938548a5bce4b43fefba.jpg",
    alt: "https://i.pinimg.com/736x/01/08/06/010806cda88c8c5d2cb10c235298c9cb.jpg", // Menggunakan gambar yang sama untuk alt untuk demo
  },
  {
    main: "https://i.pinimg.com/736x/8c/7a/58/8c7a582089565ff5d476a874f69508ef.jpg",
    alt: "https://i.pinimg.com/736x/44/59/75/44597527ad2ec2f9cb8cf323d52934ea.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/ff/d2/7d/ffd27db53bc8e357ddda36ee91410c9b.jpg",
    alt: "https://i.pinimg.com/736x/d5/ba/56/d5ba566c82e2973c14f080e6390e0612.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/bf/c6/b8/bfc6b84cd10b778807c7d352e6ab3d1c.jpg",
    alt: "https://i.pinimg.com/1200x/38/51/2c/38512cfaca82f37886c544484439fb48.jpg",
  },
  {
    main: "https://i.pinimg.com/1200x/62/05/75/6205751e2d191f2bf4f570efc6538adf.jpg",
    alt: "https://i.pinimg.com/736x/1e/d9/f8/1ed9f88d2bc0e4649ff268c6431a2b58.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/22/3c/e5/223ce55821492e33a86302f66b8b1c8f.jpg",
    alt: "https://i.pinimg.com/736x/7a/b2/23/7ab2233ad0eae1ecbd02e70f28574bf3.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/0d/28/34/0d2834397648fc0bacd8592e9df729d9.jpg",
    alt: "https://i.pinimg.com/736x/d1/92/8b/d1928b707b7eb06ed3cee4a4ddc01d61.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/2b/33/58/2b3358a7255ae7220bfb8dd9a69b5668.jpg",
    alt: "https://i.pinimg.com/736x/34/f0/b5/34f0b5e2e0cdb028e613bcdd15e2c4e8.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/17/bd/5d/17bd5db746a7f479cb05b9162852175d.jpg",
    alt: "https://i.pinimg.com/736x/82/e2/a7/82e2a799f67ba33f1935efa28a7683e6.jpg",
  },
];

// screenWidth dan itemSize tetap di sini karena ini adalah bagian dari layout utama
const screenWidth = Dimensions.get('window').width;
// Ini harus sama persis dengan perhitungan itemSize di InteractiveImage.tsx
// (screenWidth - (paddingHorizontal dari imageGridContainer (10*2)) - (gap antar item * (jumlah kolom - 1)) / jumlah kolom
// Atau lebih mudah: (screenWidth - total_padding_horizontal_container - total_gap_horizontal_dalam_container) / 3
const itemSize = (screenWidth - 20 - (10 * 2)) / 3; // 20 adalah paddingHorizontal dari mainContainer, 10 * 2 adalah gap kiri/kanan di dalam imageGridContainer

// Komponen untuk Segitiga
const Triangle = () => (
  <View style={styles.triangleShape} />
);

// Komponen untuk Kotak Nama (panjang menyesuaikan teks)
const NameBox = ({ name }) => (
  <View style={styles.nameBoxContainer}>
    <Text style={styles.nameText}>{name}</Text>
  </View>
);

// Komponen untuk Stambuk Pil
const StambukPill = ({ stambuk }) => (
  <View style={styles.stambukPillContainer}>
    <Text style={styles.stambukText}>{stambuk}</Text>
  </View>
);

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'NothingYouCouldDo-Regular': require('./assets/fonts/NothingYouCouldDo-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {/* Objek Geometri */}
      <Triangle />
      <NameBox name="Muh. Dzikri Alfauzan Nuzul" />
      <StambukPill stambuk="105841113022" />

      {/* Grid Gambar Anime */}
      <View style={styles.imageGridContainer}>
        {animeimages.map((img, index) => (
          <InteractiveImage // Gunakan komponen yang sudah dipisah di sini
            key={index}
            mainImageUri={img.main} // Gunakan prop yang telah diperbarui
            altImageUri={img.alt}   // Gunakan prop yang telah diperbarui
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeeeff', // Latar belakang abu-abu terang sesuai permintaan
    paddingVertical: 40,
  },
  triangleShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 65,
    borderRightWidth: 65,
    borderBottomWidth: 110,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFDAB9', // Peach
    marginBottom: 30,
  },
  nameBoxContainer: {
    backgroundColor: '#800000', // Maroon
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  nameText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'NothingYouCouldDo-Regular',
  },
  stambukPillContainer: {
    backgroundColor: '#87CEEB', // Sky Blue
    height: 200,
    width: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  stambukText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '600',
    fontFamily: 'NothingYouCouldDo-Regular',
  },
  // --- Gaya untuk Grid Gambar ---
  imageGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 20, // Ini mengambil 10 padding kiri dan 10 padding kanan dari mainContainer
    marginTop: 20,
    paddingHorizontal: 10, // Ini menambahkan padding internal pada container grid itu sendiri
    gap: 10, // Ini adalah jarak antar item di grid
    backgroundColor: '#EAEAEA',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  // Gaya gridItemWrapper dan gridImage dihapus dari sini
  // karena sudah ditangani di komponen InteractiveImage.tsx
});