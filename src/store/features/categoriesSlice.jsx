import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../actions/categories/getCategories';
import { get_products_by_category_id } from '../actions/categories/get_products_by_category_id';
// import { getStudents } from '../actions/student/getStudent';
// import { addStudent } from '../actions/student/setStudent';
// import { editStudent } from '../actions/student/editStudent';
// import { deleteStudent } from '../actions/student/deleteStudent';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [], // An array to store all students along with their courses
    product_by_category: [],//An Object to store a single student with its course
    // category: null, // Store the student object with courses directly here
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(get_products_by_category_id.fulfilled, (state, action) => {
        state.loading = false;
        state.product_by_category = action.payload; // Store the received student object directly
      })
      .addCase(get_products_by_category_id.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    //   .addCase(addStudent.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.categories.push(action.payload);
    //   })
    //   .addCase(editStudent.fulfilled, (state, action) => {
    //     state.loading = false;
    //     const updatedStudent = action.payload;
    //     const index = state.categories.findIndex(
    //       (student) => student.Id === updatedStudent.Id
    //     );
    //     if (index !== -1) {
    //       state.categories[index] = updatedStudent;
    //     }
    //     if (state.category && state.category.Id === updatedStudent.Id) {
    //       state.category = updatedStudent;
    //     }
    //   })
    //   .addCase(deleteStudent.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.categories = state.categories.filter(
    //       (student) => student.Id !== action.meta.arg
    //     );
    //     if (state.category && state.category.Id === action.meta.arg) {
    //       state.category = null;
    //     }
    //   })
      .addMatcher(
        (action) =>
          action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default categoriesSlice.reducer;