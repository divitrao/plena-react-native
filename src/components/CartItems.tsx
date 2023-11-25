import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { CartListPropType } from '../types/globalTypes'
import CartMinusButton from '../assets/svg/CartMinusButton'
import CartPlusButton from '../assets/svg/CartPlusButton'
import fontName from '../constants/fontName'
import colors from '../constants/colors'
import { addProduct, removeProduct } from '../utils/productAddOrRemove'
import { addCartCount, productDataList, reduceCartCount } from '../store/reducers/productSlice'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'

const CartItems = ({item_detail}:CartListPropType) => {
    let product_list = useAppSelector((state)=>state.productList.products)
  const dispatch = useAppDispatch()
    const addItem = ()=>{
        let updated_list = addProduct(item_detail.id,item_detail.quantity,item_detail.stock,product_list)
        if(updated_list!=null){
        // setCurrentQuantity(lastQuantity=>lastQuantity+1)
        dispatch(productDataList(updated_list))
        dispatch(addCartCount())
        }
      }
    
      const reduceItem = () =>{
        let updated_list = removeProduct(item_detail.id,product_list)
        // setCurrentQuantity(lastQuantity=>lastQuantity-1)
        dispatch(productDataList(updated_list))
        dispatch(reduceCartCount())
      }
  return (
    <View>
      <View style={styles.main_container}>
      
      
      <View style={styles.image_name_price_view}>
        <Image source={{uri:item_detail.thumbnail}} style={{height:50,width:50}}/>
        <View style={styles.title_price_view}>
            <Text numberOfLines={1} style={styles.title}>{item_detail.title}</Text>
            <Text style={styles.price}>${item_detail.price}</Text>
        </View>
      </View>
      
      <View style={styles.plus_minus_view}>
        <TouchableOpacity onPress={()=>reduceItem()} style={styles.minus_button}>
            <CartMinusButton />
        </TouchableOpacity>
        <Text style={styles.quantity_text}>{item_detail.quantity}</Text>
        <TouchableOpacity onPress={()=>addItem()} style={styles.plus_button}>
            <CartPlusButton />
        </TouchableOpacity>
      </View>
      
      
      </View>
    </View>
  )
}

export default CartItems

const styles = StyleSheet.create({
    main_container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    image_name_price_view:{
        flexDirection:"row",
        alignItems:"center",
        width:200
    },
    title_price_view:{
        marginLeft:15
    },
    plus_minus_view:{
        flexDirection:"row",
        alignItems:"center"
    },
    minus_button:{

    },
    quantity_text:{
        fontSize:16,
        fontFamily:fontName.MANROPE_REGULAR,
        color:colors.priceColor,
        marginLeft:15
    },
    plus_button:{
        marginLeft:15
    },
    title:{
        fontSize:16,
        fontFamily:fontName.MANROPE,
        color:colors.priceColor
    },
    price:{
        fontSize:16,
        fontFamily:fontName.MANROPE_REGULAR,
        color:colors.priceColor
    }
})