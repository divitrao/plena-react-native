import { StyleSheet,Dimensions,Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CarouselImagePropType } from '../types/globalTypes'
import Carousel from 'react-native-reanimated-carousel';
import colors from '../constants/colors';
import CarousalHearLiked from '../assets/svg/CarousalHearLiked';
import CarousalHeartDisLiked from '../assets/svg/CarousalHeartDisLiked';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { productDataList } from '../store/reducers/productSlice';
import { updateProductList } from '../utils/likeProducts';

const ImageCarousel = ({image_list,is_liked,id}:CarouselImagePropType) => {
    const width = Dimensions.get('window').width;
    const [liked,setLiked] = useState(is_liked)
    let [focusedIndex,setFocusedIndex] = useState(0)
    let product_list = useAppSelector((state)=>state.productList.products)
    const dispatch = useAppDispatch()

    const pressedLiked = ()=>{
        let updated_data = updateProductList(id,product_list)
          setLiked(!liked)
          dispatch(productDataList(updated_data))
    }

  return (
    <View>
      {image_list!=null  && image_list!=undefined && image_list.length>=1 ? 
      <View>
      <Carousel
                loop
                width={width}
                height={207}
                data={image_list}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) =>setFocusedIndex(index)}
                renderItem={({ index }) => (
                    <View
                        style={styles.carousel_Style}
                    >
                        <Image resizeMode='contain' source={{uri:image_list[index]}} style={{width:"100%",height:"100%"}}  />
                    </View>
                )}
            />
            <View style={styles.image_indicator_view}>
                {image_list.map((item,index)=>{
                    return(
                        <View key={index} style={[styles.image_indicator,{backgroundColor:focusedIndex==index?colors.starColor:colors.Black20}]}  />
                    )
                })}
            </View>
            <View style={styles.heart}>
                <TouchableOpacity onPress={()=>pressedLiked()}>
                   {liked ?  <CarousalHearLiked /> : <CarousalHeartDisLiked/> }
                </TouchableOpacity>
            </View>
            </View>
        :
        <View></View>
        }
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({

    image_indicator_view:{
        flexDirection:"row",
        position:'absolute',
        bottom:10
        },

    image_indicator:{
        height:10,
        width:35,
        borderRadius:20,
        backgroundColor:colors.starColor,
        marginHorizontal:2},

        carousel_Style:{
            flex: 1,
            justifyContent: 'center',
    },
    heart:{
        position:"absolute",
        right:10,
        top:10
    }
})