import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

import { imagesSlice } from './images/reducer';

// config the store
const makeStore = () => configureStore({
  reducer: {
    [imagesSlice.name]: imagesSlice.reducer,
  },
  devTools: true,
});

// export default the store
export default createWrapper(makeStore);;
