import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Story from './Story';

const StoriesList = (props) => {
  const stories = props.stories;
  return (
    <SafeAreaView>
      <FlatList
        data={stories}
        renderItem={({ item }) => <Story item={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesList}
      />
    </SafeAreaView>
  )
}

export default StoriesList

const styles = StyleSheet.create({
  'storiesList': {
    padding: 5,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  }
})