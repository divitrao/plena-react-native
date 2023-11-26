// HOME screen

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { singleProductType } from "./productsType";

export type HomeScreenParamList = undefined
export type AllTabRoutesScreenParamList = undefined;
export type HomeTabScreenParamList = undefined;
export type CategoryTabScreenParamList = undefined;
export type FavouriteTabScreenParamList = undefined;
export type MoreTabScreenParamList = undefined
export type ProductDetailParamList = {"item_detail":singleProductType}
export type CartListParamList = undefined




export type RootStackParamList = {
    Home:HomeScreenParamList,
    TabRoutes: AllTabRoutesScreenParamList,
    HomeTab: HomeTabScreenParamList,
    CategoryTab: CategoryTabScreenParamList,
    FavouriteTab: FavouriteTabScreenParamList,
    MoreTab: MoreTabScreenParamList,
    ProductDetailScreen:ProductDetailParamList,
    CartListScreen: CartListParamList
}

export type HomeMainScreenProps = NativeStackScreenProps<RootStackParamList,'HomeTab'>
export type ProductDetailScreenProps = NativeStackScreenProps<RootStackParamList,'ProductDetailScreen'>
export type CartListScreenProps = NativeStackScreenProps<RootStackParamList,'CartListScreen'>
export type FavouriteTabScreenProps = NativeStackScreenProps<RootStackParamList,'FavouriteTab'>