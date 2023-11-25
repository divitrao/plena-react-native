import { singleProductType } from "../types/productsType";

export const updateProductList = (id:number,product_list:singleProductType[])=>{
    const updated_list = product_list.map((item)=>{
        if(item.id==id){
          return {...item,is_favourite:!item.is_favourite}
        }
        return item
      })
      return updated_list
}