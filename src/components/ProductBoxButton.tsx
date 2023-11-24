import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const ProductBoxButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.round_button}>

        <Text style={styles.plus_sign}>+</Text>
  
      </TouchableOpacity>
    </View>
  )
}

export default ProductBoxButton

const styles = StyleSheet.create({
    round_button:{
        width: 24,
        height: 24,
        borderRadius: 12,
        elevation: 8,
        backgroundColor: colors.userInfoBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plus_sign:{
        fontSize: 12,
        fontWeight:'bold',
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
    }
})