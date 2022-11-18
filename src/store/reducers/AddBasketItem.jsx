import { createSlice } from '@reduxjs/toolkit'

const basketSlise = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    countProduct: 0,
    priceBasket: 0,
    productPage: []
  },
  reducers: {
    addProductInBasket(state, action) {
      state.basket.push(action.payload)
      state.priceBasket = state.basket.reduce((sum, current) => {
        return sum + Number((current.price).split(' ').join(''))
      },0)
      state.countProduct = state.basket.length
    },
    deletionProductInBasket(state,action) {
      state.basket = state.basket.filter((item) => {
        return item.idx !== action.payload
      })
      state.priceBasket = state.basket.reduce((sum, current) => {
        return sum + Number((current.price).split(' ').join(''))
      },0)
      state.countProduct = state.basket.length
    }
  }
})

export const { addProductInBasket , deletionProductInBasket,linkProduct } = basketSlise.actions

export default basketSlise.reducer