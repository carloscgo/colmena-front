import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const {
  setImages,
  addImage,
  deleteImage,
  updateImage,
 } = imagesSlice.actions;
export default imagesSlice.reducer;
