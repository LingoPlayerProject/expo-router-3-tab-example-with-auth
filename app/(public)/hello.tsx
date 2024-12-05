import React, { useState } from "react";
import { Text, View, TextInput } from "@/components/Themed";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthProvider";
import { Link } from "expo-router";

export default function hello() {

    return (
        <SafeAreaView className="flex-1 flex flex-col">
            <View style={{
                backgroundColor: 'red',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Link push href="(public)/login">hello</Link>
            </View>
        </SafeAreaView>
    );
}
