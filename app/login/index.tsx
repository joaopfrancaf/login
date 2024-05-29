import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Button, Pressable, Alert} from "react-native";
import Checkbox from 'expo-checkbox';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

type user = {
    email: string,
    password: string
}

export default function login() {
    const [user, setUser] = useState<user>({
        email: "",
        password: ""
    })

    function handleChange(name : string, value: string) {
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
          }));
    }

    async function handleLogin() {
        const res = await fetch(`https://6657a36a5c36170526457269.mockapi.io/api/v1/user`)
        const json = await res.json();

        if (json.some((e: user) => e.email === user.email) || json.some((e: user) => e.password === user.password)) {
            Alert.alert("LOGADO 🎉🎉")
        } else {
            Alert.alert("Usuário não encontrado")
        }
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.container}>
            <View>
                <Text style={style.text1}>Olá!</Text>
                <Text style={style.text2}>Bem-Vindo!</Text>
            </View>

            <View style={style.containerinput}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 14,
                }}>
                    <Fontisto name="email" size={18} color="black" style={{
                        paddingHorizontal: 10
                    }}/>
                    <TextInput style={style.input} placeholder="Email" inputMode={"email"} placeholderTextColor={"#999faa"} value={user.email} onChangeText={(value) => handleChange('email', value)}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 14,
                }}>
                    <AntDesign name="lock1" size={18} color="black" style={{
                        paddingHorizontal: 10
                    }}/>
                    <TextInput style={style.input} placeholder="Senha" placeholderTextColor={"#999faa"} value={user.password} onChangeText={(value) => handleChange('password', value)}/>
                </View>

                <View style={style.checkboxcontainer}>
                    <Checkbox/>
                    <Text style={style.text1}>Mantenha me conectado</Text>
                </View>
            </View>

            <Pressable onPress={handleLogin}>
                <View style={style.button}>
                    <MaterialIcons name="logout" size={18} color="white" />
                    <Text style={style.buttonText}>Login</Text>
                </View>
            </Pressable>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#062A43",
        alignItems: "center",
        justifyContent: "center",
        gap: 75
      },
    containerinput: {
        gap: 20,
        alignItems: "center"
    },
    text1: {
        color: "white",
        fontWeight: "bold"
    },
    text2: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "white",
        width: 250,
        height: 46,
        borderRadius: 14,
        fontSize: 15,
    },
    checkboxcontainer: {
        flexDirection: "row",
        alignItems:"center",
        gap: 9
    },
    button: {
        flexDirection: "row",
        width: 280,
        height: 50,
        backgroundColor: "#f7b500",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
})