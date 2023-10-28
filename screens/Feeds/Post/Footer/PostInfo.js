import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PostInfo = ({ item }) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.likedBy}>
                <Text>Liked by </Text>
                <TouchableOpacity>
                    <Text style={styles.name}>dharmaraj_rathinavel</Text>
                </TouchableOpacity>
                <Text> and </Text>
                <TouchableOpacity>
                    <Text style={styles.name}>others</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.caption}>
                <Text>
                    <Text style={styles.name}>dharmaraj_rathinavel</Text> {item.caption}
                </Text>
            </View>
            <TouchableOpacity>
                <Text style={{ fontSize: 13, color: '#777' }}>View all {item.commentsCount} comments</Text>
            </TouchableOpacity>
            <Text style={styles.posted_at}>{item.posted_at}</Text>
        </View>
    )
}

export default PostInfo

const styles = StyleSheet.create({
    name: {
        fontWeight: '700'
    },
    likedBy: {
        lineHeight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    caption: {
        paddingVertical: 5
    },
    posted_at: {
        fontSize: 10,
        color: '#aaa',
        marginTop: 5,
        marginBottom: 12
    }
})