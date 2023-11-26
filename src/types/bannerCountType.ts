import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigationTypes';
export interface BannerCount{
    count:number,
    orientation?:'horizontal'|'vertical',
    scrollEnabled?:boolean
}

export interface CartCountProp{
    count:number;
    stroke:'white'|'black',
    navigation:NativeStackNavigationProp<RootStackParamList,'HomeTab'>
}