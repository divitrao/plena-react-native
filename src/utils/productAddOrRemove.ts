import { singleProductType } from "../types/productsType"
import {Alert} from 'react-native'
export const addProduct = (product_id:number,quantity:number,max_stock:number,product_list:singleProductType[])=>{
    if(quantity+1<=max_stock){
    let updated_list = product_list.map((item)=>{
      if(item.id==product_id){
        return {...item, quantity:item.quantity+1}
      }
      return item
    })

    return updated_list
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
    return null
  }
}

export const removeProduct = (product_id:number,product_list:singleProductType[]) =>{
    let updated_list = product_list.map((item)=>{
      if(item.id==product_id){
        return {...item, quantity:item.quantity-1}
      }
      return item
    })
    return updated_list
  }