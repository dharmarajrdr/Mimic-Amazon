import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Post/Header/Header'
import Footer from './Post/Footer/Footer'
import Media from './Post/Media/Media'


const Post = ({ item }) => {
    return (
        <View style={styles.post}>
            <Header item={item.header} />
            <Media item={item.media} />
            <Footer item={item.footer} />
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    post: {
        borderColor: '#eee',
        borderBottomWidth: 1
    }
})