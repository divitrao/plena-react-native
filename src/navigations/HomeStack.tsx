import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';
import navigationPaths from '../constants/navigationPaths';
import TabRoutes from './TabRoutes';
import ProductDetailPage from '../screens/productDetail/ProductDetailPage';
import CartComponent from '../components/CartComponent';
import { StyleSheet, TouchableOpacity } from 'react-native';
import GoBackIcon from '../assets/svg/GoBackIcon';
import { useAppSelector } from '../hooks/storeHooks';
import CartScreen from '../screens/cart/CartScreen';
import fontName from '../constants/fontName';

const HomeStack = () => {
    const cart_count = useAppSelector((state)=>state.productList.cart_count)
    const Stack = createNativeStackNavigator<RootStackParamList>(); 
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name={navigationPaths.TAB_ROUTES} component={TabRoutes}  />
        <Stack.Screen options={({navigation})=>({
        headerShadowVisible:false,
        headerTitle:"",
      headerLeft:()=><TouchableOpacity onPress={()=>navigation.goBack()}><GoBackIcon /></TouchableOpacity> ,
      headerRight:()=><CartComponent navigation={navigation} count={cart_count} stroke='black' />
    })} 
      name={navigationPaths.PRODUCT_DETAIL_SCREEN} 
      component={ProductDetailPage} />
      <Stack.Screen options={({navigation})=>({
        headerShadowVisible:false,
        headerTitle:`Shopping Cart (${cart_count})`,
      headerLeft:()=><TouchableOpacity style={styles.header_left_cart_style} onPress={()=>navigation.goBack()}><GoBackIcon /></TouchableOpacity> ,
      headerTitleStyle:styles.header_cart_title_style,    
      
      
      })} 
      name={navigationPaths.CART_SCREEN} 
      component={CartScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack


const styles = StyleSheet.create({

  header_cart_title_style:{fontSize:16,fontFamily:fontName.MANROPE_REGULAR},
  header_left_cart_style:{marginRight:25}

 })