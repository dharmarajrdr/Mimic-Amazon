import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './Header';
import StoriesList from './StoriesList';
import stories from './stories.json'

const Feeds = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />
            <StoriesList stories={stories} />
        </View>
    )
}

export default Feeds

const styles = StyleSheet.create({

})