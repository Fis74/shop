import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../model/IProduct'

export interface CounterState {
  products: IProduct[],
  isLoading: boolean,
  error: string,
  product: IProduct,
  cartProduct: IProduct[],
  totalCount: number,
  totalPrice: number
}

const initialState: CounterState = {
    products: [] as IProduct[],
    isLoading: false,
    error: "",
    product: {} as IProduct,
    cartProduct: [] as IProduct[],
    totalCount: 0,
    totalPrice: 0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
      fetchProductSucces(state, action:PayloadAction<IProduct[]>) {
        state.isLoading = false
        state.error = ''
        state.products = action.payload
      },
      fetchProductError(state, action:PayloadAction<string>) {
        state.isLoading = false
        state.error = action.payload
      },
      fetchProductisLoading(state, action:PayloadAction<boolean>) {
        state.isLoading = action.payload
      },
      fetchProductIdSucces(state, action:PayloadAction<IProduct>) {
        state.isLoading = false
        state.error = ''
        state.product = action.payload
      },
      fetchProductIdError(state, action:PayloadAction<string>) {
        state.isLoading = false
        state.error = action.payload
      },
      fetchProductIdisLoading(state, action:PayloadAction<boolean>) {
        state.isLoading = action.payload
      },
      test(state) {
        state.totalPrice = state.cartProduct.reduce((now, cur) => {
          return now += cur.price * cur.count
      }, 0)
      state.totalCount = state.cartProduct.reduce((now, cur) => {
        return now += cur.count
    }, 0)
      },
      addToCart(state, action:PayloadAction<IProduct>) {
        const findItem = state.cartProduct.find((items) => {
         return items.id === action.payload.id
        })
        if (!findItem) {
          state.cartProduct.push(action.payload)
        } else {
          findItem.count += 1
        }
      },
      increment(state, action:PayloadAction<number>) {
        state.cartProduct.forEach(item => {
              if (item.id === action.payload) {
                item.count +=1
              }
        });
      },
      decrement(state, action:PayloadAction<number>) {
        state.cartProduct.forEach((item, index) => {
          if (item.id === action.payload) {
            item.count > 1 ? item.count -= 1 : state.cartProduct.splice(index,1)
          }
    });
      },
      remove(state, action:PayloadAction<number>) {
        state.cartProduct.forEach((item, index) => {
          if (item.id === action.payload) {
            state.cartProduct.splice(index,1)
          }
    });
  },
  },
})


export default productSlice.reducer