import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import {
  State,
  imagesSlice,
  setImages,
  addImage,
  deleteImage,
  updateImage,
} from './reducer';

describe('imagesSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        images: imagesSlice.reducer,
      },
    });
  });

  it('should set images correctly', () => {
    const newState = imagesSlice.reducer(
      undefined, setImages([{ id: 1, name: 'Image 1', url: 'http://example1.com' }])
    );

    expect(newState.images.length).toBe(1);
    expect(newState.images[0].id).toBe(1);
  });

  it('should add images correctly', () => {
    const newState = imagesSlice.reducer({
      images: [{ id: 1, name: 'Image 1', url: 'http://example1.com' }]
    },
      addImage({ id: 2, name: 'Image 2', url: 'http://example2.com' })
    );

    expect(newState.images.length).toBe(2);
    expect(newState.images[1].id).toBe(2);
  });

  it('should delete images correctly', () => {
    const newState = imagesSlice.reducer({
      images: [{ id: 1, name: 'Image 1', url: 'http://example1.com' }]
    },
      deleteImage(1)
    );

    expect(newState.images.length).toBe(0);
  });

  it('should update images correctly', () => {
    const newState = imagesSlice.reducer({
      images: [{ id: 1, name: 'Image 1', url: 'http://example1.com' }]
    },
      updateImage({ id: 1, name: 'Image', url: 'http://example.com' })
    );

    expect(newState.images.length).toBe(1);
    expect(newState.images[0].id).toBe(1);
    expect(newState.images[0].name).toBe('Image');
    expect(newState.images[0].url).toBe('http://example.com');
  });
});
