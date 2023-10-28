import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../../GlobalStyles';
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ item }) => {
  return (
    <View style={styles.postHeader}>
      <View style={styles.userImageName}>
        <View style={[styles.userImageBorder, item.hasStory ? { borderColor: 'red' } : { borderColor: 'white' }]}>
          <Image source={require('/home/dharma-13910/.projects/MOBILE_APP_DEVELOPMENT/ecommerce-project/assets/dharmaraj.jpg')} style={styles.userImage} resizeMode='cover' />
        </View>
        <TouchableOpacity style={GlobalStyles.FRCB}>
          <Text style={styles.username}>{item.name}</Text>
          {item.isVerifiedProfile && <MaterialIcons name='verified' size={12} color='#0093e8' style={GlobalStyles.verifiedIcon} />}
        </TouchableOpacity>
        {!item.isFollowing && <TouchableOpacity><Text style={{ color: '#0093e8', fontWeight: '700', marginLeft: 5 }}>Follow</Text></TouchableOpacity>}
      </View>
      <Entypo name='dots-three-horizontal' size={16} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  'postHeader': {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  'userImage': {
    width: 30,
    height: 30,
    borderRadius: 100
  },
  'userImageBorder': {
    padding: 1,
    borderWidth: 1,
    borderRadius: 100
  },
  'userImageName': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  'username': {
    marginLeft: 10,
    fontSize: 16,
    marginRight: 5,
    fontWeight: '600'
  }
})