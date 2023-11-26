import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import fontName from '../../constants/fontName'

const MoreScreen = () => {
  return (
    <View style={styles.main_view}>
      <Text style={styles.text}>MoreScreen</Text>
    </View>
  )
}

export default MoreScreen

const styles = StyleSheet.create({
  main_view:{
    flex:1,
    backgroundColor:colors.white,
    alignItems:"center",
    justifyContent:"center"
    },
    text:{
      fontSize:25,
      fontFamily:fontName.MANROPE_SEMIBOLD,
      color:colors.priceColor
    }
})