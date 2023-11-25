import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { buttonProp } from '../types/productBoxPropType'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { addCartCount, productDataList, reduceCartCount } from '../store/reducers/productSlice'

const ProductBoxButton = ({quantity,product_id,max_stock}:buttonProp) => {

  let product_list = useAppSelector((state)=>state.productList.products)
  const dispatch = useAppDispatch()


  const addItem = (product_id:number,quantity:number)=>{
    if(quantity+1<=max_stock){
    let updated_list = product_list.map((item)=>{
      if(item.id==product_id){
        return {...item, quantity:item.quantity+1}
      }
      return item
    })

    dispatch(productDataList(updated_list))
    dispatch(addCartCount())
  }
  else{
    Alert.alert('Reched  Max Quantity',"you can't add any more quantity of this product", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  }

  const reduceItem = (product_id:number) =>{
    let updated_list = product_list.map((item)=>{
      if(item.id==product_id){
        return {...item, quantity:item.quantity-1}
      }
      return item
    })
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