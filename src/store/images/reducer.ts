import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export type Images = {
  id: number,
  name: string,
  url: string,
};

export type State = {
  images: Images[];
};

export const initialState: State = {
  images: [],
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },

    addImage: (state, action) => {
      state.images = [...state.images, action.payload];
    },

    deleteImage: (state, action) => {
      const images = [...state.images];

      state.images = images.filter(({id}) => id !== action.payload);
    },

    updateImage: (state, action) => {
      const images = [...state.images];
      const index = images.findIndex(({id}) => id === action.payload.id);

      images[index].name = action.payload.name;
      images[index].url = action.payload.url;

      state.images = images;
    },

    // Special reducer for hydrating the state
    extraReducers: (builder: any) => {
      builder.addCase(HYDRATE, (state: State, action: PayloadAction<{ images: Images[] }>) => {
        return {
          ...state,
          images: [...action.payload.images],
        };
      });
    },
  },
});

export const {
  setImages,
  addImage,
  deleteImage,
  updateImage,
 } = imagesSlice.actions;
export default imagesSlice.reducer;
