import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import ProductBox from '../../components/ProductBox'
import navigationPaths from '../../constants/navigationPaths'
import { FavouriteTabScreenProps } from '../../types/navigationTypes'
import { updateProductList } from '../../utils/likeProducts'
import { productDataList } from '../../store/reducers/productSlice'
import { singleProductType } from '../../types/productsType'

const FavouriteScreen = ({navigation}:FavouriteTabScreenProps) => {
  const product_list =   useAppSelector((state)=>state.productList.products)
  const dispatch = useAppDispatch()
  let [favouriteList,setfavouriteList] = useState<singleProductType[]>([])
  const setFavourite = (id:number)=>{
    let updated_data = updateProductList(id,product_list)
    dispatch(productDataList(updated_data))
  }
  useEffect(()=>{
    let favourite_list = product_list.filter((item)=>{
      if(item.is_favourite){
        return item
      }
    })
    setfavouriteList(favourite_list)
  },[product_list])
  return (
    <View style={{backgroundColor:colors.white,flex:1}}>
      <FlatList 
          data={favouriteList}
          numColumns={2}
          renderItem={({item,index})=>{

            return(
          <ProductBox navigation={navigation} item={item} setFavourite={setFavourite} />
            )
          
          }}
          columnWrapperStyle={[styles.column_style,{justifyContent:favouriteList.length>1?"space-evenly":"space-between",marginLeft:favouriteList.length>1?0:19}]}
      />
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
  column_style:{
    marginBottom:15
  },
})