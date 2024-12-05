import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { View, useColorScheme } from "react-native";


function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <View style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Link push href="(public)/login">login</Link>
            </View>

            {/* <Stack>
                <Stack.Screen
                    name="(public)/login"
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />

            </Stack> */}
        </ThemeProvider>
    );
}
export default RootLayoutNav;