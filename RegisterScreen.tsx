import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SelectList} from "react-native-dropdown-select-list/index";
import {countries} from "./src/shared/utils/countries";

export default function RegisterScreen({navigation}: any) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [country, setCountry] = useState('');
    const [countrySelect, setCountrySelect] = useState('');

    return (
        <View>
            <View style={styles.registerContainer}>
                <Text style={{ fontWeight:'bold'}}>Sign Up Page</Text>
            </View>
            <TextInput
                style={styles.textInput}
                value={firstname}
                onChangeText={setFirstname}
                placeholder="Enter your firstname">

            </TextInput>
            <TextInput
                style={styles.textInput}
                value={lastname}
                onChangeText={setLastname}
                placeholder="Enter your lastname">

            </TextInput>
            <TextInput
                style={styles.textInput}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="Enter your date of birth">

            </TextInput>
            <TextInput
                style={styles.textInput}
                value={country}
                onChangeText={setCountry}
                placeholder="Enter your country">

            </TextInput>
            <SelectList
                boxStyles={{
                    width: '95%',
                    alignSelf: 'center',
                    height: 45,
                    borderColor: '#000',
                    borderRadius: 0,
                    marginTop: 12
                }}
                dropdownStyles={{
                    width: '95%',
                    alignSelf: 'center',
                    borderColor: '#000',
                    borderRadius: 0,
                    height: 150,

                }}
                search={true}
                setSelected={setCountrySelect}
                data={countries.map(cntry => {
                    return {value: cntry.countryName, name: cntry.countryCode}
                })}
                defaultOption={{
                    key: undefined,
                    value: undefined
                }}
            />
            <Button
                title="Sign Up"
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ marginLeft: 12}}>Login instead.</Text>
            </TouchableOpacity>
        </View>


    )

}

const styles = StyleSheet.create({
    registerContainer: {
        marginLeft: 12,
        marginTop: 50
    },
    textInput: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 5
    }
})