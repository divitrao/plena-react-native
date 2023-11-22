import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import DropArrow from '../assets/svg/DropArrow'

const AddressBar = () => {
  return (
    <View >
      <View>
        <Text style={styles.delivery_text}>DELIVERY TO</Text>
        <View style={styles.address_drop}>
        <Text style={styles.main_address}>Green Way 3000, Sylhet</Text>
        <View>
            <DropArrow />
        </View>
        </View>
      </View>
      <View></View>
    </View>
  )
}

export default AddressBar

const styles = StyleSheet.create({
    delivery_text:{
        fontWeight:'800',
        color:colors.userNameColor,
        fontSize:11,
        opacity:0.5
    },
    address_drop:{
        flexDirection:"row",
        width:173,
        alignItems:"center",
        justifyContent:"space-between"
    },
    main_address:{
        fontSize:14,
        lineHeight:19,
        color:colors.userNameColor
    }
})