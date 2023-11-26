import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {memo} from 'react'
import colors from '../constants/colors'
import HeartLiked from '../assets/svg/HeartLiked'
import ProductBoxButton from './ProductBoxButton'
import fontName from '../constants/fontName'
import { ProdcutBoxProps } from '../types/productBoxPropType'
import HeartDisliked from '../assets/svg/HeartDisliked'
import navigationPaths from '../constants/navigationPaths'

const ProductBox = ({item,setFavourite,navigation}:ProdcutBoxProps) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(navigationPaths.PRODUCT_DETAIL_SCREEN,{'item_detail':item})}  style={styles.container}>
      <Image style={{height:"70%",width:"100%",borderRadius:12}} resizeMode={'contain'} source={{uri:item.thumbnail}} />
      <TouchableOpacity onPress={()=>{setFavourite(item.id)}} style={styles.heart_style}>
        { item.is_favourite ?
         <HeartLiked   /> :
         <HeartDisliked />
        }
      </TouchableOpacity>
      <View style={styles.product_price_container}>
        <View>
        <Text style={styles.item_price}>${item.price}</Text>
        <Text numberOfLines={2} style={styles.item_name}>{item.title}</Text>
        </View>
        <ProductBoxButton quantity={item.quantity} product_id={item.id} max_stock={item.stock}/>
      </View>
    </TouchableOpacity>
  )
}

export default memo(ProductBox)
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
            color:colors.priceColor,
            marginLeft:10
    },
    item_name:{
        fontSize:12,
        fontFamily:fontName.MANROPE_REGULAR,
        // borderWidth:1,
        width:100,
        marginLeft:7
        
    }
})