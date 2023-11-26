import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { ProductDetailScreenProps } from '../../types/navigationTypes'
import colors from '../../constants/colors'
import fontName from '../../constants/fontName'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ImageCarousel from '../../components/ImageCarousel'
import ProdcutDetailButton from '../../components/ProductDetailButton'
import { useAppSelector } from '../../hooks/storeHooks'
import { singleProductType } from '../../types/productsType'
import { useIsFocused } from '@react-navigation/native';

const ProductDetailPage = ({route}:ProductDetailScreenProps) => {
  let product_list = useAppSelector((state)=>state.productList.products)
  let is_focused = useIsFocused()
  const item_detail = route.params.item_detail
  const [itemDetail,setItemDetail] = useState<singleProductType>(item_detail)
  useEffect(()=>{
    
    if(is_focused){
        let selected_item = product_list.filter((item)=>{
          if(item.id===item_detail.id){
            return item
          }
        })
        setItemDetail({...item_detail,quantity:selected_item[0].quantity})
    }
  },[is_focused])
  return (
    <SafeAreaView style={styles.main_screen_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Text style={styles.title}>{itemDetail.title}</Text>
           
        </View>
        <View style={styles.ratings}>
        <StarRatingDisplay
        rating={itemDetail.rating}
        color={colors.starColor}
        starSize={28}
        
      />
       <Text style={styles.review}>100 Reviews</Text>
        </View>
        <View style={styles.carousel_view}>
        <ImageCarousel image_list={itemDetail.images} id={itemDetail.id} is_liked={itemDetail.is_favourite} />
        </View>
        <View style={styles.price_and_offer}>
          <Text style={styles.price}>${itemDetail.price}</Text>
          <View style={styles.offer_view}>
              <Text style={styles.off_price}>{itemDetail.discountPercentage}% off</Text>
          </View>
        </View>
        <View style={styles.product_detail_button_view}>
          <ProdcutDetailButton product_id={itemDetail.id}  max_quantity={itemDetail.stock} quantity={itemDetail.quantity}  />
        </View>
        <View style={styles.detail_view}>
          <Text style={styles.detail_title}>Details</Text>
          <Text style={styles.detail}>{itemDetail.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetailPage

const styles = StyleSheet.create({
    main_screen_container:{
        backgroundColor:colors.white,
        flex:1,
        paddingHorizontal:10
    },
    title:{
        fontSize:50,
        fontFamily:fontName.MANROPE_EXTRA_BOLD,
        color:colors.priceColor
    },
    ratings:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    review:{
        fontSize:20,
        fontFamily:fontName.MANROPE_REGULAR
    },
    price_and_offer:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:20
    },
    price:{
      fontFamily:fontName.MANROPE_BOLD,
      fontSize:24,
      color:colors.userInfoBackgroundColor
    },
    offer_view:{
      height:24,
      width:100,
      borderRadius:70,
      backgroundColor:colors.userInfoBackgroundColor,
      marginLeft:15
    },
    off_price:{
      color:colors.white,
      fontFamily:fontName.MANROPE_REGULAR,
      fontSize:16,
      textAlign:"center"
    },
    detail_title:{
      fontSize:24,
      fontFamily:fontName.MANROPE_REGULAR,
      color: colors.priceColor
    },
    detail:{
      fontSize:20,
      fontFamily:fontName.MANROPE_REGULAR,
      color: colors.searchPlaceHolderColor
    },

    product_detail_button_view:{
      justifyContent:"center",
      marginVertical:5,
      alignItems:"center"},
    
      carousel_view:{
        marginVertical:20
      },
    detail_view:{
      marginVertical:10
    }
})