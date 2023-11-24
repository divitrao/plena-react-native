import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BannerCount } from '../types/bannerCountType'
import BannerImage from '../assets/svg/BannerImage'

const Banner = (prop:BannerCount) => {
    let banner_list = Array.from(Array(prop.count).keys())
    let is_horizontal = prop.orientation=='horizontal'?true:false
    let show_scrollbar = prop.scrollEnabled?true:false
  return (
    <View>
      <FlatList 
      horizontal={is_horizontal}
      showsHorizontalScrollIndicator={show_scrollbar}
      showsVerticalScrollIndicator={show_scrollbar}
      data={banner_list}
      renderItem={()=>{
        return(
            <TouchableOpacity style={styles.banner_style}>
            <BannerImage />
            </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    banner_style:{
        marginHorizontal:10
    }
})