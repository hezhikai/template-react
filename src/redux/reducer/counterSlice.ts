import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// api
const service = (params: any) => {
  return new Promise(resolve => {
    resolve(params);
  });
};

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}
const initialState: CounterState = {
  value: 0,
  status: 'idle'
};

// 异步reducer
export const addNumber = createAsyncThunk(
  // 信号 type
  'counter/addNumber',
  // 函数 action
  async (params: any) => {
    return await service(params);
    // return { payload: res, meta: '' }; // payload
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: {
    // fulfilled 表示成功状态，还有 pending、rejected 状态
    [addNumber.fulfilled as any](state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    [addNumber.rejected as any](state, action: PayloadAction<number>) {
      state.value = action.payload;
    }
  }
  // extraReducers: builder => {
  //   builder.addCase(addNumber.fulfilled, (state: any, action) => {
  //     debugger
  //     state.value = action.payload;
  //   });
  //   // .addCase(...)
  // }
});

// 同步reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const getCounter = (state: RootState) => ({ ...state.counter });

export default counterSlice.reducer;
