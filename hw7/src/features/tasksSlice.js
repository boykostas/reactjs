import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tasks } from '../data/tasks';

// Имитация асинхронной загрузки данных с помощью createAsyncThunk
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000); // имитация задержки в 1 секунду
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tasksSlice.reducer;
