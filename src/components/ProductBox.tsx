import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import HeartLiked from '../assets/svg/HeartLiked'
import ProductBoxButton from './ProductBoxButton'
import fontName from '../constants/fontName'

const ProductBox = () => {
  return (
    <View style={styles.container}>
      <Image style={{height:"70%",width:"100%",borderRadius:12}} resizeMode={'contain'} source={{uri:"https://i.dummyjson.com/data/products/5/1.jpg"}} />
      <View style={styles.heart_style}>
        <HeartLiked/>
      </View>
      <View style={styles.product_price_container}>
        <View>
        <Text style={styles.item_price}>$499</Text>
        <Text style={styles.item_name}>Clown tag HO3</Text>
        </View>
        <ProductBoxButton/>
      </View>
    </View>
  )
}

export default ProductBox

const styles = StyleSheet.create({

    container:{
        height:194,
        width:160,
        // borderWidth:1,
        backgroundColor:'#F8F9FB',
        borderRadius:12
    },
    heart_style:{
        position:"absolute",
        left:15,
        top:15
    },
    product_price_container:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:2
    },
    item_price:{
            fontSize:14,
            fontFamily:fontName.MANROPE_SEMIBOLD,
            color:colors.priceColor
    },
    item_name:{
        fontSize:12,
        fontFamily:fontName.MANROPE_REGULAR
    }
})