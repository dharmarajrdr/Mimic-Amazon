import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from './Post'

const Posts = ({ postsList }) => {
    return (
        <FlatList
            data={postsList}
            renderItem={({item}) => <Post item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Posts

const styles = StyleSheet.create({})