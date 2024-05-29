import { StatusBar } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <>
            <StatusBar barStyle={"default"}/>
            <Stack screenOptions={{
                headerShown: false
            }}
            >
            </Stack>
        </>
    )
}