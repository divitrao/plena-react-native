import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../constants/colors'
import CartComponent from '../../components/CartComponent'
import fontName from '../../constants/fontName'
import SearchBar from '../../components/SearchBar'
import AddressBar from '../../components/AddressBar'
import DeliveryTime from '../../components/DeliveryTime'
import Banner from '../../components/Banner'
import { productList } from '../../services/api/productList'
import ProductBox from '../../components/ProductBox'

const HomeScreen = () => {
  useEffect(()=>{
    productList().then((response)=>{
      console.log(response)
    })
  },[])
  return (
    <SafeAreaView style={styles.main_background}>
      <FlatList 
      numColumns={2}
      data={ Array.from(Array(100).keys())}
      ListHeaderComponent={()=>{
        return(
          <View>
            <View style={styles.user_info}>
      <View style={styles.user_name_view}>
        <View>
          <Text style={styles.name_text}>Hey, XYZ</Text>
        </View>
        <View>
            <CartComponent />
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
          <View style={styles.product_box}>
          <ProductBox />
          </View>
        )
      }}
      columnWrapperStyle={styles.column_style}
      ListFooterComponent={()=><View style={{height:500}}></View>}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main_background:{
    backgroundColor:colors.white
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
  }

})