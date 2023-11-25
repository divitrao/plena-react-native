import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { singleProductType } from '../../types/productsType'

export interface ProductListState {
  products: singleProductType[],
  cart_count:number
}

const initialState: ProductListState = {
  products: [],
  cart_count:0
}

export const productSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    productDataList: (state,actions:PayloadAction<singleProductType[]>) => {
      state.products = actions.payload
    },
    addCartCount:(state)=>{
      state.cart_count = state.cart_count+1
    },
    reduceCartCount:(state)=>{
      state.cart_count = state.cart_count-1
    }

  },
})

// Action creators are generated for each case reducer function
export const { productDataList,addCartCount,reduceCartCount } = productSlice.actions

export default productSlice.reducer