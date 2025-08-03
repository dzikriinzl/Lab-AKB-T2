import { StyleSheet, Text, View } from 'react-native';

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
  return (
    <View style={styles.mainContainer}>
      <Triangle />
      <NameBox name="Muh. Dzikri Alfauzan Nuzul" />
      <StambukPill stambuk="105841113022" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FC', // Latar belakang abu-abu terang
  },
  triangleShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 65, // Ukuran segitiga
    borderRightWidth: 65,
    borderBottomWidth: 110,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFDAB9', // **Peach**
    marginBottom: 30, // Jarak ke bawah
  },
  nameBoxContainer: {
    backgroundColor: '#800000', // **Maroon**
    paddingVertical: 15, // Padding vertikal
    paddingHorizontal: 25, // Padding horizontal untuk menyesuaikan lebar
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    minWidth: 150, // Lebar minimum untuk estetika
    // Tambahkan shadow untuk efek 3D
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  nameText: {
    color: '#FFFFFF', // Teks putih agar kontras dengan maroon
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  stambukPillContainer: {
    backgroundColor: '#87CEEB', // **Sky Blue**
    height: 200, // Tinggi bentuk pil
    width: 90, // Lebar bentuk pil
    borderRadius: 100, // border-radius penuh agar berbentuk pil/kapsul
    justifyContent: 'center',
    alignItems: 'center',
    // Tambahkan shadow untuk efek 3D
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  stambukText: {
    fontSize: 14,
    color: '#333333', // Teks hitam keabu-abuan agar kontras dengan sky blue
    fontWeight: '600',
  },
});