import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import colors from '../../constants/colors'
import CartComponent from '../../components/CartComponent'
import fontName from '../../constants/fontName'
import SearchBar from '../../components/SearchBar'
import AddressBar from '../../components/AddressBar'
import DeliveryTime from '../../components/DeliveryTime'
import Banner from '../../components/Banner'
import { productList } from '../../services/api/productList'
import ProductBox from '../../components/ProductBox'
import { singleProductType } from '../../types/productsType'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { productDataList } from '../../store/reducers/productSlice'
import navigationPaths from '../../constants/navigationPaths'
import { HomeMainScreenProps } from '../../types/navigationTypes'
import { updateProductList } from '../../utils/likeProducts'

const HomeScreen = ({navigation}:HomeMainScreenProps) => {
  const dispatch = useAppDispatch()
  const product_list =   useAppSelector((state)=>state.productList.products)
  const cart_count = useAppSelector((state)=>state.productList.cart_count)
  const[isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    productList().then((response)=>{
      let updated_list = response['products'].map((item:singleProductType)=>{
          return {...item, quantity:0,is_favourite:false }
      })
      dispatch(productDataList(updated_list))
      setIsLoading(false)
    })
  },[])

  const setFavourite = (id:number)=>{
      let updated_data = updateProductList(id,product_list)
      dispatch(productDataList(updated_data))
    }

  return (
    <SafeAreaView style={styles.main_background}>
      { isLoading ? 
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} />
      </View>:
      <FlatList
      
      numColumns={2}
      data={product_list}
      ListHeaderComponent={()=>{
        return(
          <View>
            <View style={styles.user_info}>
      <View style={styles.user_name_view}>
        <View>
          <Text style={styles.name_text}>Hey, XYZ</Text>
        </View>
        <View>
            <CartComponent navigation={navigation} count={cart_count} stroke='white' />
        </View>
      </View>

      <View style={styles.search_bar}>
        <SearchBar />
      </View>

      <View style={styles.delivery_detail}>
        <AddressBar />
        <DeliveryTime />
      </View>
    </View>
    <View style={styles.banner}>
        <Banner count={5} orientation='horizontal' scrollEnabled={false} />
      </View>
      <Text style={styles.list_heading}>Recommended</Text>
          </View>
        )
      }}
      renderItem={({item,index})=>{
        return(
          <View>
          <TouchableOpacity onPress={()=>navigation.navigate(navigationPaths.PRODUCT_DETAIL_SCREEN,{'item_detail':item})}>
          <ProductBox item={item} setFavourite={setFavourite} />
          </TouchableOpacity>
          </View>
        )
      }}
      columnWrapperStyle={styles.column_style}
      ListFooterComponent={()=><View style={{height:500}}></View>}
      ListEmptyComponent={()=>{
        return (
          <View style={styles.empty_list}>
            <Text>No Data to Show</Text>
          </View>
        )
      }}
      />
    }
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main_background:{
    backgroundColor:colors.white,
    flex:1
  },
  user_info:{
    backgroundColor:colors.userInfoBackgroundColor, 
  },
  user_name_view:{
    marginTop:"12%",
    marginHorizontal:30,
    flexDirection:"row",
    justifyContent:"space-between"
  },

  name_text:{
    fontSize:22,
    fontWeight:'600',
    color:colors.userNameColor,
    fontFamily:fontName.MANROPE
  },
  search_bar:{
    marginHorizontal:15,
    marginTop:"10%"
  },
  delivery_detail:{
    flexDirection:"row",
    marginVertical:15,
    justifyContent:"space-between",
    marginHorizontal:"8%"
    
  },
  banner:{
    marginVertical:15
  },
  list_heading:{
    marginVertical:10,
    fontSize:30,
    fontWeight:'400',
    fontFamily:fontName.MANROPE,
    marginLeft:"3%"
  },
  column_style:{
    justifyContent:"space-evenly",
    marginBottom:15
  },
  loader:{
    flex:1,
    justifyContent:"center",
  },
  empty_list:{
    alignItems:"center",
    marginTop:"10%"}

})