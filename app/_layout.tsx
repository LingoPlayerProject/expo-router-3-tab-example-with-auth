import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import AuthProvider from "@/context/AuthProvider";
import { View } from "react-native";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "/login",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) return null;

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <AuthProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                {/* <View style={{
            width: '100%',
            height: '100%',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Link push href="(public)/login">login</Link>
        </View> */}
                <Stack>
                    <Stack.Screen
                        name="(public)/hello"
                        options={{
                            headerShown: false,
                            animation: 'default',
                            animationDuration: 100,
                        }}
                    />
                    <Stack.Screen
                        name="(public)/login"
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen name="(auth)/(tabs)" options={{
                        headerShown: false,
                        animation: 'slide_from_bottom'
                    }} />
                </Stack>
            </ThemeProvider>
        </AuthProvider>
    );
}
