import { StatusBar } from "react-native";
import Index from "./index";

export default function RootLayout() {
    return(
        <>
            <StatusBar barStyle={"default"}/>
            <Index/>
        </>
    )
}