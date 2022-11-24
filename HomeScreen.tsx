import React, {Component} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import {Button, Text, View, StyleSheet} from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeScreen({navigation}: any) {
    return (
            <>
                <View style={styles.homeContainer}>
                    <Text>Home Screen</Text>
                </View>
                <Button
                    title="Go to Login"
                    onPress={() => navigation.navigate('Login', {name: 'Login'})}
                />
            </>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 50,
        marginLeft: 20,
    }

})

