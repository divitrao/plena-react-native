import { singleProductType } from "./productsType";

export interface ProdcutBoxProps{
    item:singleProductType,
    setFavourite:Function
}

export interface buttonProp{
    quantity:number;
    product_id:number;
    max_stock:number
}