import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  basic: {
    name: '',
    email: '',
    phone: '',
    photo: '',
  },
};
export const boxesSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    addBoxes: (state, action) => {
      if (action.payload.data == 'DynamicBox') {
        state.data.push({
          type: 'DynamicBox',
          heading: '',
          context: '',
        });
      }
      if (action.payload.data == 'DynamicSpace') {
        state.data.push({
          type: 'DynamicSpace',
          height: 30,
        });
      }
    },
    deleteBoxes: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    updateHead: (state, action) => {
      state.data[action.payload.index].heading = action.payload.data;
    },
    updateContext: (state, action) => {
      state.data[action.payload.index].context = action.payload.data;
    },
    updateBasic: (state, action) => {
      console.log(action.payload);
      state.basic[action.payload.basicName] = action.payload.data;
    },
    filterData: (state, action) => {
      console.log(action.payload);
      let _arr = [...state.data];
      console.log(current(state.data));

      const x = _arr[action.payload.start];
      const y = _arr[action.payload.end];
      console.log(current(x));
      console.log(current(y));
      _arr[action.payload.end] = x;
      _arr[action.payload.start] = y;

      state.data = _arr;
    },
    updateSpace: (state, action) => {
      console.log('called' + action.payload.data);
      state.data[action.payload.index].height = action.payload.data;
    },
  },
});

export const boxesSliceState = (state) => state.boxes;
export const { realBoxes } = (state) => state.boxes;
export const {
  addBoxes,
  deleteBoxes,
  updateHead,
  filterData,
  updateContext,
  updateBasic,
  updateSpace,
} = boxesSlice.actions;
export default boxesSlice.reducer;
