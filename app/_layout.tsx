import { StatusBar } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <Stack screenOptions={{
            headerShown: false
        }}
        >
            <StatusBar barStyle={"default"}/>
        </Stack>
    )
}