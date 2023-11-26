import React,{useRef,useEffect} from 'react'
import {StyleSheet,TouchableOpacity,View, Image} from 'react-native'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types/navigationTypes';
import HomeScreen from '../screens/home/HomeScreen';
import navigationPaths from '../constants/navigationPaths';
import CategoryScreen from '../screens/categories/CategoryScreen';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import MoreScreen from '../screens/more/MoreScreen';
import colors from '../constants/colors';
import * as Animatable from 'react-native-animatable';
import { TabButtonContent } from '../types/bottomTabsType';
import HomeIcon from '../assets/svg/HomeIcon';
import HomeNotFocused from '../assets/svg/HomeNotFocused';
import CategoryFocused from '../assets/svg/CategoryFocused';
import CategoryNotFocused from '../assets/svg/CategoryNotFocused';
import HeartFocused from '../assets/svg/HeartFocused';
import HeartNotFocused from '../assets/svg/HeartNotFocused';
import MoreFocused from '../assets/svg/MoreFocused';
import MoreNotFocused from '../assets/svg/MoreNotFocused';
import fontName from '../constants/fontName';


const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props:TabButtonContent) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef?.current?.animate(animate1);
      circleRef?.current?.animate(circle1);
      textRef?.current?.transitionTo({ scale: 0 });
    } else {
      viewRef?.current?.animate(animate2);
      circleRef?.current?.animate(circle2);
      textRef?.current?.transitionTo({ scale: 1 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
            { focused ? item.focused_icon : item.not_focused_icon  }
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabRoutes = () => {
const BottomTab = createBottomTabNavigator<RootStackParamList>();
  return (
    <BottomTab.Navigator screenOptions={{tabBarStyle:styles.tabBar}}>
      <BottomTab.Screen  
      name={navigationPaths.HOME_TAB}  
      component={HomeScreen}
      options={{tabBarButton:(props)=><TabButton {...props} item={{'label':"Home",'focused_icon':<HomeIcon />,'not_focused_icon':<HomeNotFocused />}} />,headerShown:false}}
      />

      <BottomTab.Screen  
      name={navigationPaths.CATEGORY_TAB} 
      component={CategoryScreen}  
      options={{tabBarButton:(props)=><TabButton {...props} item={{'label':"Category",'focused_icon':<CategoryFocused />,'not_focused_icon':<CategoryNotFocused />}} />,
              headerTitle:"Category"}}
      />

      <BottomTab.Screen  
      name={navigationPaths.FAVOURITE_TAB} 
      component={FavouriteScreen}  
      options={{tabBarButton:(props)=><TabButton {...props} item={{'label':"Favourite",'focused_icon':<HeartFocused />,'not_focused_icon':<HeartNotFocused />}} 
      />,
      headerTitle:"Favourite's"
      }}
      />

      <BottomTab.Screen  
      name={navigationPaths.MORE_TAB} 
      component={MoreScreen} 
      options={{tabBarButton:(props)=><TabButton {...props} item={{'label':"More",'focused_icon':<MoreFocused />,'not_focused_icon':<MoreNotFocused />}} />,
                headerTitle:"More"}}
      />
    </BottomTab.Navigator>
  )
}

export default TabRoutes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 75,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: colors.white,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: colors.searchPlaceHolderColor,
    fontFamily:fontName.MANROPE,
    marginBottom:15
  }
})