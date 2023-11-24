import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { singleProductType } from '../../types/productsType'

export interface ProductListState {
  products: singleProductType[]
}

const initialState: ProductListState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    productDataList: (state,actions:PayloadAction<singleProductType[]>) => {
      state.products = actions.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { productDataList } = productSlice.actions

export default productSlice.reducer