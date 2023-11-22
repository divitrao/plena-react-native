import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';
import navigationPaths from '../constants/navigationPaths';
import TabRoutes from './TabRoutes';

const HomeStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>(); 
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name={navigationPaths.TAB_ROUTES} component={TabRoutes}  />
    </Stack.Navigator>
  )
}

export default HomeStack
