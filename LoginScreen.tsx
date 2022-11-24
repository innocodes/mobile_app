import * as RNLocalize from "react-native-localize";
import {StyleSheet, TextInput, View, Text, Button, TouchableOpacity} from 'react-native';
import {useState} from "react";


export default function LoginScreen({navigation}: any) {
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password')
    return (
        <View>
            <View style={styles.loginContainer}>
                <Text style={{ fontWeight:'bold', marginLeft: 12}}>Login Page</Text>
            </View>
            <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username">

            </TextInput>
            <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password">

            </TextInput>
            <Button
                title="Login"
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={{ marginLeft: 12}}>New User? Sign Up Here.</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    loginContainer: {
        marginTop: 50,
        textAlign: "center"
        
    },
    textInput: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 5
    }
})
