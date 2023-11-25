import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { useAppSelector } from '../../hooks/storeHooks'
import CartItems from '../../components/CartItems'
import fontName from '../../constants/fontName'
import { CartListScreenProps } from '../../types/navigationTypes'
import navigationPaths from '../../constants/navigationPaths'

const CartScreen = ({navigation}:CartListScreenProps) => {

  let product_list = useAppSelector((state)=>state.productList.products)

  return (
    <View style={styles.main_container}>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={product_list}
      renderItem={({item,index})=>{
        if(item.quantity>=1){
        return(
          <View style={styles.cart_item_component}>
            <CartItems  item_detail={item} />
          </View>
        )
        }
        else{
          return(<></>)
        }
      }}
      ItemSeparatorComponent={(item)=>{
        if(item.leadingItem.quantity>=1){
        return(
          <View style={{width:"100%",height:1,backgroundColor:"#EBEBFB"}}  />
        )
        }
      }}
      ListFooterComponent={()=>{
        var sum = 0
        console.log("rereerer")
        product_list.forEach((item)=>{
          if(item.quantity>=1){
            
            sum+=item.price*item.quantity
          }
        })
        if(sum!=0){
        return(
        <View style={styles.list_footer}>
          <View style={styles.price_detail_view}>
            <View>
              <Text style={styles.price_key}>Subtotal</Text>
            </View>
            <View>
              <Text style={styles.subtotal_and_delivery_text}>${sum}</Text>
            </View>
          </View>
          <View style={styles.price_detail_view}>
            <View>
              <Text style={styles.price_key}>Delivery</Text>
            </View>
            <View>
              <Text style={styles.subtotal_and_delivery_text}>$2</Text>
            </View>
          </View>
          <View style={styles.price_detail_view}>
            <View>
              <Text style={styles.price_key}>Total</Text>
            </View>
            <View>
              <Text style={styles.total_text}>${sum+2}</Text>
            </View>
          </View>
          <View style={{alignItems:"center",height:56,justifyContent:"center"}}>
          <TouchableOpacity style={styles.check_out_button}>
            <Text style={styles.checkout_text}>Proceed To Checkout</Text>
          </TouchableOpacity>
          </View>
        </View>
        )
        }
        else{
          return(
            <View style={styles.empty_cart_view}>
              <Text style={styles.cart_empty_text}>Your cart is Empty</Text>
              <TouchableOpacity style={styles.cart_empty_button} onPress={()=>navigation.navigate(navigationPaths.HOME_TAB)}>
                <Text style={styles.cart_empty_button_text}>Let's Shop</Text>
              </TouchableOpacity>
            </View>
          )
        }
        
      }}
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:colors.white,
    paddingHorizontal:10
  },
  cart_item_component:{
    marginVertical:10
  },
  price_detail_view:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:25,
    marginVertical:15
  },
  list_footer:{
    backgroundColor:colors.userNameColor,
    borderRadius:30,
    marginTop:20,
    marginBottom:20
  },
  check_out_button:{

    width:"90%",
    height:56,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.userInfoBackgroundColor,
    borderRadius:20
  },
  checkout_text:{
    color:colors.white,
    fontSize:20,
    fontFamily:fontName.MANROPE_SEMIBOLD
  },
  price_key:{
    fontSize:15,
    fontFamily:fontName.MANROPE_REGULAR,
    color:colors['greyScale-Black_2']
  },
  subtotal_and_delivery_text:{
    fontSize:15,
    color:colors.priceColor,
    fontFamily:fontName.MANROPE_MEDIUM
  },
  total_text:{
    fontSize:15,
    color:colors.priceColor,
    fontFamily:fontName.MANROPE_SEMIBOLD
  },
  empty_cart_view:{
    height:200,
    justifyContent:"center",
    alignItems:"center"
  },
  cart_empty_text:{
    fontSize:20,
    fontFamily:fontName.MANROPE_SEMIBOLD,
    color:colors.priceColor},

  cart_empty_button:{
    backgroundColor:colors.userInfoBackgroundColor,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10},

  cart_empty_button_text:{
    color:colors.white,
    padding:10,
    fontSize:15,
    fontFamily:fontName.MANROPE_REGULAR
  }
})