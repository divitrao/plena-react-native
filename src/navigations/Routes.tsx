import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import navigationPaths from '../constants/navigationPaths';

const Routes = () => {
    const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen options={{headerShown:false}} name={navigationPaths.HOME} component={HomeStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})