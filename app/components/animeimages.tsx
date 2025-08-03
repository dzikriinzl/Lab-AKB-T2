// app/components/PresidenImage.tsx

import React, { useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  main: string;
  alt: string;
}

// Menghitung ukuran gambar agar pas di grid 3x3 dengan sedikit gap
const screenWidth = Dimensions.get('window').width;
const itemSize = (screenWidth - 40 - (10 * 2)) / 3; // screenWidth - paddingHorizontal - (gap * 2) / 3 items

export default function PresidenImage({ main, alt }: Props) {
  const [isAlt, setIsAlt] = useState(false);
  // Gunakan useRef untuk mempertahankan Animated.Value antar render
  const scaleAnim = useRef(new Animated.Value(1)).current; // Skala awal

  // State untuk melacak skala saat ini secara numerik, agar bisa diakumulasi
  const [currentNumericalScale, setCurrentNumericalScale] = useState(1);

  const handlePress = () => {
    // 1. Ganti gambar
    setIsAlt((prev) => !prev);

    // 2. Hitung skala baru
    let newNumericalScale = currentNumericalScale;
    if (currentNumericalScale < 2) { // Hanya perbesar jika belum mencapai 2x
      newNumericalScale = Math.min(currentNumericalScale * 1.2, 2);
    } else { // Jika sudah 2x atau lebih, dan diklik lagi, reset ke 1
        newNumericalScale = 1;
    }
    setCurrentNumericalScale(newNumericalScale); // Update skala numerik

    // 3. Animasikan skala
    Animated.spring(scaleAnim, {
      toValue: newNumericalScale, // Target nilai animasi
      friction: 7, // Menentukan "pegas" animasi, nilai lebih rendah = lebih memantul
      tension: 100, // Menentukan kecepatan animasi, nilai lebih tinggi = lebih cepat
      useNativeDriver: true, // Untuk performa yang lebih baik
    }).start();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchableWrapper}>
      <Animated.Image
        source={{ uri: isAlt ? alt : main }}
        // Menggunakan Animated.Value untuk transform
        style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableWrapper: {
    width: itemSize, // Menggunakan ukuran dinamis
    height: itemSize, // Menggunakan ukuran dinamis
    margin: 5, // Sesuaikan margin antar gambar
    borderRadius: 8,
    overflow: 'hidden', // Penting untuk gambar yang diperbesar agar tidak keluar dari batas sentuh
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Gambar mengisi wrapper
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover', // Pastikan gambar mengisi seluruh area sel
  },
});