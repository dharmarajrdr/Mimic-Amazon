import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Media = ({ item }) => {
  let postImage = require('/home/dharma-13910/.projects/MOBILE_APP_DEVELOPMENT/ecommerce-project/assets/dharmaraj.jpg');
  return (
    <View style={styles.mediaContainer}>
      <Image source={postImage} resizeMode='contain' />
    </View>
  )
}

export default Media

const styles = StyleSheet.create({
  mediaContainer: {
    height: 400,
    borderColor: '#eee',
    borderWidth: 1,
    overflow: 'hidden'
  }
})