import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Interactions from './Interactions'
import PostInfo from './PostInfo'

const Footer = ({ item }) => {
  return (
    <View>
      <Interactions item={item} />
      <PostInfo item={item} />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})