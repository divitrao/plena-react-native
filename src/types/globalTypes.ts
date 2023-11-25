export type CarouselImagePropType = {
    image_list?:(string)[] | null;
    is_liked?:boolean,
    id:number
}


export type ProductDetailButtonPropType = {
    quantity:number,
    max_quantity:number,
    product_id:number
}