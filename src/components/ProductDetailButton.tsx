import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ProductDetailButtonPropType } from '../types/globalTypes'
import colors from '../constants/colors'
import fontName from '../constants/fontName'
import { addProduct, removeProduct } from '../utils/productAddOrRemove'
import { addCartCount, productDataList, reduceCartCount } from '../store/reducers/productSlice'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'

const ProductDetailButton = ({quantity,max_quantity,product_id}:ProductDetailButtonPropType) => {
  let product_list = useAppSelector((state)=>state.productList.products)
  const dispatch = useAppDispatch()
  const [currentQuantity,setCurrentQuantity] = useState(quantity)
  const addItem = (quantity:number)=>{
    let updated_list = addProduct(product_id,quantity,max_quantity,product_list)
    if(updated_list!=null){
    setCurrentQuantity(lastQuantity=>lastQuantity+1)
    dispatch(productDataList(updated_list))
    dispatch(addCartCount())
    }
  }

  const reduceItem = () =>{
    let updated_list = removeProduct(product_id,product_list)
    setCurrentQuantity(lastQuantity=>lastQuantity-1)
    dispatch(productDataList(updated_list))
    dispatch(reduceCartCount())
  }
  
  return (
    <>
      {currentQuantity==0? 
        <TouchableOpacity style={styles.large_button} onPress={()=>addItem(currentQuantity)}>
                    <Text style={styles.add_text}>ADD</Text>

        </TouchableOpacity>
        :
        <View style={styles.add_minus_view}>
            <TouchableOpacity style={styles.square_button} onPress={()=>addItem(currentQuantity)}>
            <View style={styles.plus_minus_container}>
              <Text style={styles.plus_minus_style}>+</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.quantity_view}>
              <Text style={styles.quantity_text}>{currentQuantity}</Text>
            </View>
            <TouchableOpacity style={styles.square_button} onPress={()=>reduceItem()}>
              <View style={styles.plus_minus_container}>
            <Text style={styles.plus_minus_style}>-</Text>
            </View>
            </TouchableOpacity>
        </View>  
    }
    </>
  )
}

export default ProductDetailButton

const styles = StyleSheet.create({
  add_text:{
    textAlign:"center",
    color:colors.white,
    fontFamily:fontName.MANROPE_EXTRA_BOLD,
    fontSize:20
  },
  large_button:{
    width:"90%",
  height:50,
  backgroundColor:colors.userInfoBackgroundColor,
  justifyContent:"center",
    borderRadius:10
},
square_button:{
  width:50,
  height:50,
  backgroundColor:colors.userInfoBackgroundColor,
  justifyContent:"center",
  borderRadius:10,
  alignItems:"center"
},
plus_minus_style:{
  textAlign:"center",
  fontSize:20,
  fontFamily:fontName.MANROPE_EXTRA_BOLD,
  color:colors.white
},
plus_minus_container: {
  width: 30,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
},
add_minus_view:{
  width:"90%",
  height:50,
  flexDirection:"row",
  justifyContent:"space-between",
  backgroundColor:"#AEBDF6",
  borderRadius:10},
  quantity_view:{
    justifyContent:"center"
  },
  quantity_text:{
    fontSize:30,
    color:colors.black,
    fontFamily:fontName.MANROPE_EXTRA_BOLD
  }
})
