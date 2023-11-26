import { StyleSheet, FlatList, TouchableOpacity, View,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import ProductBox from '../../components/ProductBox'
import { FavouriteTabScreenProps } from '../../types/navigationTypes'
import { updateProductList } from '../../utils/likeProducts'
import { productDataList } from '../../store/reducers/productSlice'
import { singleProductType } from '../../types/productsType'
import navigationPaths from '../../constants/navigationPaths'
import fontName from '../../constants/fontName'

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
    <View style={styles.main_container}>
      <FlatList 
          data={favouriteList}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={()=>{
            return(<View style={{height:200}} />)
          }}
          ListEmptyComponent={()=>{
              return(
                <View style={styles.empty_fav}>
                  <Text style={styles.empty_fav_text}>Your cart is Empty</Text>
                  <TouchableOpacity style={styles.fav_empty_button} onPress={()=>navigation.navigate(navigationPaths.HOME_TAB)}>
                    <Text style={styles.fav_empty_button_text}>Let's Shop</Text>
                  </TouchableOpacity>
                </View>
              )
          }}
          numColumns={2}
          renderItem={({item,index})=>{

            return(
          <ProductBox navigation={navigation} item={item} setFavourite={setFavourite} />
            )
          
          }}
          columnWrapperStyle={[styles.column_style,]}
      />
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
  main_container:{
    backgroundColor:colors.white,
    flex:1,
    paddingHorizontal:10
  },
  column_style:{
    marginBottom:15,
    justifyContent:"space-between"
  },
  empty_fav:{
    height:200,
    justifyContent:"center",
    alignItems:"center"
  },
  empty_fav_text:{
    fontSize:20,
    fontFamily:fontName.MANROPE_SEMIBOLD,
    color:colors.priceColor},
  
  fav_empty_button:{
    backgroundColor:colors.userInfoBackgroundColor,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10},

  fav_empty_button_text:{
    color:colors.white,
    padding:10,
    fontSize:15,
    fontFamily:fontName.MANROPE_REGULAR
  }
})