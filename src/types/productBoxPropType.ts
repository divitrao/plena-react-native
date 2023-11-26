import { RootStackParamList } from "./navigationTypes";
import { singleProductType } from "./productsType";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export interface ProdcutBoxProps{
    item:singleProductType,
    setFavourite:Function,
    navigation:NativeStackNavigationProp<RootStackParamList,'HomeTab'>|NativeStackNavigationProp<RootStackParamList,'FavouriteTab'>
}

export interface buttonProp{
    quantity:number;
    product_id:number;
    max_stock:number
}