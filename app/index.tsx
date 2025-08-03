import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={indexStyles.container}>
      <Text style={indexStyles.nameText}>Muh. Dzikri Alfauzan Nuzul</Text>
      <Text style={indexStyles.stambukText}>105841113022</Text>
    </View>
  );
}

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F2F7', // Latar belakang berbeda dari _layout.tsx
  },
  nameText: {
    fontSize: 20, // Ukuran font lebih besar
    color: '#2C3E50', // Warna teks gelap
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stambukText: {
    color: '#E74C3C', // Merah cerah
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});