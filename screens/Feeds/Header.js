import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import LOGO from '../../assets/logo-m1.png';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{ width: '50%' }}>
                <Image source={LOGO} style={{ width: 140 }} resizeMode='center' />
            </View>
            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', gap: 20 }}>
                <Feather name="plus-square" size={24} color="black" />
                <Feather name="heart" size={24} color="black" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        paddingRight: 20,
        height: 55,
        justifyContent: 'space-between'
    }
})