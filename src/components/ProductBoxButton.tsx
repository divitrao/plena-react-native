import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { buttonProp } from '../types/productBoxPropType'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { addCartCount, productDataList, reduceCartCount } from '../store/reducers/productSlice'
import { addProduct, removeProduct } from '../utils/productAddOrRemove'

const ProductBoxButton = ({quantity,product_id,max_stock}:buttonProp) => {

  let product_list = useAppSelector((state)=>state.productList.products)
  const dispatch = useAppDispatch()


  const addItem = (product_id:number,quantity:number)=>{
    let updated_list = addProduct(product_id,quantity,max_stock,product_list)
    if(updated_list!=null){
    dispatch(productDataList(updated_list))
    dispatch(addCartCount())
    }
  }
  

  const reduceItem = (product_id:number) =>{
    let updated_list = removeProduct(product_id,product_list)
    dispatch(productDataList(updated_list))
    dispatch(reduceCartCount())
  }


  return (
    <View> 
      { quantity==0?
      <TouchableOpacity style={styles.round_button} onPress={()=>addItem(product_id,quantity)}>

        <Text style={styles.plus_sign}>+</Text>
  
      </TouchableOpacity>:
      <View style={{flexDirection:"row",borderWidth:1}} >
        <TouchableOpacity style={styles.round_button} onPress={()=>addItem(product_id,quantity)}>

        <Text style={styles.plus_sign}>+</Text>

        </TouchableOpacity>
        <Text style={{paddingHorizontal:10}}>{quantity}</Text>
        <TouchableOpacity style={styles.round_button} onPress={()=>reduceItem(product_id)}>

        <Text style={styles.plus_sign}>-</Text>
  
      </TouchableOpacity>

        </View>
}
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