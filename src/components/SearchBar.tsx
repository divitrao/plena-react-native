import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import SearchIcon from '../assets/svg/SearchIcon'

const SearchBar = () => {
  return (
    <View style={styles.search_bar}>
        <View style={styles.search_icon}>
            <SearchIcon />
        </View>
        <View style={styles.search_placeholder}>
            <TextInput style={styles.search_text} placeholder='Search Products or store' placeholderTextColor={colors.searchPlaceHolderColor} />
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({

    search_bar:{
        height:56,
        width:"100%",
        
        borderRadius:28,
        backgroundColor:colors.searchBarColor,
        flexDirection:"row",
        alignItems:"center"
    },
    search_placeholder:{
        
        width:"100%",
        marginLeft:5
    },
    search_icon:{
        marginLeft:25
    },
    search_text:{
        color:"#ffffff"
    }
})