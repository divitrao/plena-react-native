import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropArrow from '../assets/svg/DropArrow'
import colors from '../constants/colors'

const DeliveryTime = () => {
  return (
    <View style={styles.main_view}>
        <View>
            <Text style={styles.time_label}>WITHIN</Text>
        </View>
        <View style={styles.time_box}>
            <Text  style={styles.main_address}>1 HOUR</Text>
            <View>
                <DropArrow />
            </View>
        </View>

    </View>
  )
}

export default DeliveryTime

const styles = StyleSheet.create({
    time_label:{
        fontWeight:'800',
        color:colors.userNameColor,
        fontSize:11,
        opacity:0.5,
    },
    address_drop:{
        flexDirection:"row",
        width:173,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    main_address:{
        fontSize:14,
        lineHeight:19,
        color:colors.userNameColor,
    },
    time_box:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    main_view:{
        width:70
    }
})