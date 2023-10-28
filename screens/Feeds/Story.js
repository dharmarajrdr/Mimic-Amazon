import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const Story = ({ item }) => {
    return (
        <TouchableOpacity style={styles.story}>
            <View style={[styles.storyBorder, { borderColor: item.isCloseFriend ? 'green' : 'red' }]}>
                <Image source={require('../../assets/dharmaraj.jpg')} style={styles.profilePicture} resizeMode='cover' />
                {item.isCurrentUser &&
                    <View style={styles.addStoryIcon}>
                        <Feather name="plus" size={14} color="white" />
                    </View>
                }
            </View>
            <Text style={styles.storyOwnerName} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default Story

const styles = StyleSheet.create({
    'story': {
        padding: 7,
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    'storyBorder': {
        padding: 2,
        borderWidth: 2,
        borderRadius: 100
    },
    'profilePicture': {
        width: 55,
        height: 55,
        borderRadius: 100
    },
    'storyOwnerName': {
        width: 60,
        paddingTop: 2,
        textAlign: 'center'
    },
    'addStoryIcon': {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#0093e8',
        borderRadius: 100,
        padding: 2,
        borderWidth: 1,
        borderColor: 'white'
    }
})