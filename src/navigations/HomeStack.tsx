import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';
import navigationPaths from '../constants/navigationPaths';
import TabRoutes from './TabRoutes';
import ProductDetailPage from '../screens/productDetail/ProductDetailPage';
import CartComponent from '../components/CartComponent';
import { TouchableOpacity } from 'react-native';
import GoBackIcon from '../assets/svg/GoBackIcon';
import { useAppSelector } from '../hooks/storeHooks';

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
      headerRight:()=><CartComponent count={cart_count} stroke='black' />
    })} 
      name={navigationPaths.PRODUCT_DETAIL_SCREEN} 
      component={ProductDetailPage} />
    </Stack.Navigator>
  )
}

export default HomeStack


