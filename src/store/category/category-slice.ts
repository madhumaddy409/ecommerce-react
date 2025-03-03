import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
    categoryName: string;
    categoryId: number;
}

interface CategoryState {
    category: Category[];
}

const initialState: CategoryState = {
    category: [],
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategoryList: (state, action: PayloadAction<{ 
            category_id: number;
            category_name: string;
        }[]>) => {
            // Map API response to the expected state format
            const newCategories = action.payload.map(cat => ({
                categoryId: cat.category_id,
                categoryName: cat.category_name
            }));

            // Use spread operator to avoid mutation
            state.category = [...newCategories];
        }
    }
});

export const { addCategoryList } = categorySlice.actions;
export default categorySlice.reducer;
