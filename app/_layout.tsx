import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "red",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
          }}
        >
          Fauzan Azhari Rahman
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "red",
          borderRadius: 50,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "white" }}>105841109622</Text>
      </View>

      <View
        style={{

          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "red",
        }}
      />

    </View>
  );
}