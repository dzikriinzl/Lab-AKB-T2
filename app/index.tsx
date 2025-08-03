// app/index.tsx

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Mencegah splash screen menghilang otomatis sampai font dimuat
SplashScreen.preventAutoHideAsync();

// Data gambar anime untuk grid
const animeimages = [
  {
    main: "https://i.pinimg.com/736x/19/99/48/199948a4cee5938548a5bce4b43fefba.jpg",
    alt: "https://i.pinimg.com/736x/19/99/48/199948a4cee5938548a5bce4b43fefba.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/8c/7a/58/8c7a582089565ff5d476a874f69508ef.jpg",
    alt: "https://i.pinimg.com/736x/8c/7a/58/8c7a582089565ff5d476a874f69508ef.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/ff/d2/7d/ffd27db53bc8e357ddda36ee91410c9b.jpg",
    alt: "https://i.pinimg.com/736x/ff/d2/7d/ffd27db53bc8e357ddda36ee91410c9b.jpg",
  },
  {
    main: "https://i.pinimg.com/1200x/be/61/9a/be619aa4bc5f145a1c148099c49008f7.jpg",
    alt: "https://i.pinimg.com/1200x/be/619aa4bc5f145a1c148099c49008f7.jpg",
  },
  {
    main: "https://i.pinimg.com/1200x/62/05/75/6205751e2d191f2bf4f570efc6538adf.jpg",
    alt: "https://i.pinimg.com/1200x/62/05/75/6205751e2d191f2bf4f570efc6538adf.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/22/3c/e5/223ce55821492e33a86302f66b8b1c8f.jpg",
    alt: "https://i.pinimg.com/736x/22/3c/e5/223ce55821492e33a86302f66b8b1c8f.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/0d/28/34/0d2834397648fc0bacd8592e9df729d9.jpg",
    alt: "https://i.pinimg.com/736x/0d/28/34/0d2834397648fc0bacd8592e9df729d9.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/2b/33/58/2b3358a7255ae7220bfb8dd9a69b5668.jpg",
    alt: "https://i.pinimg.com/736x/2b/33/58/2b3358a7255ae7220bfb8dd9a69b5668.jpg",
  },
  {
    main: "https://i.pinimg.com/736x/17/bd/5d/17bd5db746a7f479cb05b9162852175d.jpg",
    alt: "https://i.pinimg.com/736x/17/bd/5d/17bd5db746a7f479cb05b9162852175d.jpg",
  },
];

const screenWidth = Dimensions.get('window').width;
const itemSize = (screenWidth - 20 - (10 * 2)) / 3;

// Komponen untuk setiap sel gambar di grid
const GridImageItem = ({ main, alt }) => {
  const [isAlt, setIsAlt] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [currentNumericalScale, setCurrentNumericalScale] = useState(1);

  const handlePress = () => {
    setIsAlt((prev) => !prev);

    let newNumericalScale = currentNumericalScale;
    if (currentNumericalScale < 2) {
      newNumericalScale = Math.min(currentNumericalScale * 1.2, 2);
    } else {
      newNumericalScale = 1;
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
    <TouchableOpacity onPress={handlePress} style={styles.gridItemWrapper}>
      <Animated.Image
        source={{ uri: isAlt ? alt : main }}
        style={[styles.gridImage, { transform: [{ scale: scaleAnim }] }]}
      />
    </TouchableOpacity>
  );
};

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
          <GridImageItem key={index} main={img.main} alt={img.alt} />
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
    width: screenWidth - 20,
    marginTop: 20,
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: '#EAEAEA',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  gridItemWrapper: {
    width: itemSize,
    height: itemSize,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
