import { configureStore } from '@reduxjs/toolkit'
import addtofav from './addtofav'

export const store = configureStore({
  reducer: {
     fav:addtofav
  },
})