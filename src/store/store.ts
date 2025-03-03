import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import categoryReducer from "./category/category-slice"

const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;