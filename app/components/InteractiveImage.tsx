// app/components/InteractiveImage.tsx

import React, { useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

interface InteractiveImageProps {
  mainImageUri: string; // Ubah nama prop agar lebih jelas
  altImageUri: string;   // Ubah nama prop agar lebih jelas
}

// Menghitung ukuran gambar agar pas di grid 3x3 dengan sedikit gap
// Ukuran ini perlu disesuaikan agar konsisten dengan perhitungan di index.tsx
const screenWidth = Dimensions.get('window').width;
// Ini harus sama dengan calculation di index.tsx
// (screenWidth - (paddingHorizontal di imageGridContainer) - (gap * 2)) / 3
const itemSize = (screenWidth - 20 - (10 * 2)) / 3; // screenWidth - paddingHorizontal (10+10) - (gap kiri+kanan per item * 2) / 3 items

export default function InteractiveImage({ mainImageUri, altImageUri }: InteractiveImageProps) {
  const [isAlt, setIsAlt] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [currentNumericalScale, setCurrentNumericalScale] = useState(1);

  const handlePress = () => {
    setIsAlt((prev) => !prev);

    let newNumericalScale = currentNumericalScale;
    if (currentNumericalScale < 2) {
      newNumericalScale = Math.min(currentNumericalScale * 1.2, 2);
    } else {
      newNumericalScale = 1; // Reset ke ukuran asli jika sudah mencapai 2x atau lebih
    }
    setCurrentNumericalScale(newNumericalScale);

    Animated.spring(scaleAnim, {
      toValue: newNumericalScale,
      friction: 7,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchableWrapper}>
      <Animated.Image
        source={{ uri: isAlt ? altImageUri : mainImageUri }}
        style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableWrapper: {
    width: itemSize,
    height: itemSize,
    // margin: 5, // Margin diatur melalui 'gap' di imageGridContainer di index.tsx
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Tambahkan warna latar belakang untuk item
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
});