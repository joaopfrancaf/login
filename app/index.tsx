import { Link } from "expo-router";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>

      <View style={style.divImage}>
          <Image style={style.image} source={require("@/assets/images/logo.png")}/>
      </View>

      <View style={style.divbuttom}>
        <Link replace href="/login" asChild>
          <TouchableOpacity style={style.button}>
              <Text style={style.text}>Iniciar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#062A43",
    alignItems: "center",
  },
  divImage: {
    flex: 1,
    justifyContent: "center",
  },
  divbuttom: {
    position: "absolute",
    bottom: 50
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: "#f7b500",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  image: {
    resizeMode: "contain",
    width: 260
  }
})
