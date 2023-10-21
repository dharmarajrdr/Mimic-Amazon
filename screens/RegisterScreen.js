import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import LOGO from '../assets/logo-l.jpg'
import { KeyboardAvoidingView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import GlobalStyles from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center' }}>
            <View style={{marginTop: 25}}>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={LOGO}
                />
            </View>
            <KeyboardAvoidingView style={{ width: '75%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Create an account</Text>
                </View>
                <View style={{ marginTop: 100, width: '100%' }}>
                    <View style={styles.formInput}>
                        <Entypo name="user" size={24} color="#777" />
                        <TextInput style={{ paddingVertical: 5, paddingHorizontal: 10, flex: 1 }} placeholder='Enter your name' />
                    </View>
                    <View style={styles.formInput}>
                        <MaterialIcons name="email" size={24} color="#777" />
                        <TextInput style={{ paddingVertical: 5, paddingHorizontal: 10, flex: 1 }} placeholder='Enter email address' />
                    </View>
                    <View style={styles.formInput}>
                        <MaterialIcons name="lock" size={24} color="#777" />
                        <TextInput style={{ paddingVertical: 5, paddingHorizontal: 10, flex: 1 }} placeholder='Enter password' />
                    </View>
                    <View>
                        <Pressable style={GlobalStyles.LoginSignUpButton}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Submit</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <Text style={{ color: '#555' }}>Already having an account?</Text>
                        <Pressable onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ color: '#007FFF', marginLeft: 5 }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', paddingHorizontal: 10, borderRadius: 5,
        height: 45, marginVertical: 10
    }
});