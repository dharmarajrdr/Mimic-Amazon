import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, Fontisto } from '@expo/vector-icons'
import GlobalStyles from '../../../../GlobalStyles'

const Interactions = () => {
    return (
        <View style={[GlobalStyles.FRCB, styles.InteractionsContainer]}>
            <View style={[GlobalStyles.FRCB, { gap: 18 }]}>
                <TouchableOpacity><FontAwesome name='heart-o' size={22} color='black' style={{ marginRight: 3 }} /></TouchableOpacity>
                <TouchableOpacity><Fontisto name='comment' size={20} color='black' /></TouchableOpacity>
                <TouchableOpacity><Ionicons name='paper-plane-outline' size={22} color='black' /></TouchableOpacity>
            </View>
            <TouchableOpacity>
                <FontAwesome name='bookmark-o' size={22} />
            </TouchableOpacity>
        </View>
    )
}

export default Interactions

const styles = StyleSheet.create({
    InteractionsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})