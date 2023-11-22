import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import CartComponent from '../../components/CartComponent'
import fontName from '../../constants/fontName'
import SearchBar from '../../components/SearchBar'
import AddressBar from '../../components/AddressBar'
import DeliveryTime from '../../components/DeliveryTime'

const HomeScreen = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

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
    
  }

})