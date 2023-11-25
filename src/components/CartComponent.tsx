import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartIcon from '../assets/svg/CartIcon'
import fontName from '../constants/fontName'
import colors from '../constants/colors'
import { CartCountProp } from '../types/bannerCountType'
import BlackCart from '../assets/svg/BlackCart'
import navigationPaths from '../constants/navigationPaths'

const CartComponent = ({count,stroke,navigation}:CartCountProp) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(navigationPaths.CART_SCREEN)}>
      { stroke=='white' ?  <CartIcon height={25} width={25} />:<BlackCart />}
      { count!=0 &&  <View style={styles.cart_count}>
          <Text style={styles.cart_count_number}>{count}</Text>
      </View>}
    </TouchableOpacity>
  )
}

export default CartComponent

const styles = StyleSheet.create({

  cart_count:{
    height:25,
    width:25,
    borderRadius:12.5,
    backgroundColor:"#F9B023",
    position:"absolute",
    bottom:12,
    left:10},
    cart_count_number:{
      alignSelf:"center",
      fontFamily:fontName.MANROPE_SEMIBOLD,
      color:colors.white

    }
})