import { configureStore } from '@reduxjs/toolkit'

import basketReducer from './reducers/AddBasketItem'
import userREduser from './reducers/userSlise'

export default configureStore ({
  reducer: {
    basket: basketReducer,
    user: userREduser
  }
})