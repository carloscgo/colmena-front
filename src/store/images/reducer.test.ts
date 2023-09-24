import { configureStore } from '@reduxjs/toolkit';
import {
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
    const mockPayload = [{ id: 1, name: 'Image 1', url: 'http://example.com/image1.jpg' }];

    store.dispatch(setImages(mockPayload));

    const state = store.getState().images;

    expect(state.images).toEqual(mockPayload);
  });

  it('should add image correctly', () => {
    const mockPayload = { id: 2, name: 'Image 2', url: 'http://example.com/image2.jpg' };

    store.dispatch(addImage(mockPayload));

    const state = store.getState().images;

    expect(state.images).toContainEqual(mockPayload);
  });

  it('should delete image correctly', () => {
    const initialState = [
      { id: 1, name: 'Image 1', url: 'http://example.com/image1.jpg' },
      { id: 2, name: 'Image 2', url: 'http://example.com/image2.jpg' },
    ];
    const idToDelete = 2;

    store.dispatch(deleteImage(idToDelete));

    const state = store.getState().images;

    expect(state.images).toEqual([{ id: 1, name: 'Image 1', url: 'http://example.com/image1.jpg' }]);
  });

  it('should update image correctly', () => {
    const initialState = [
      { id: 1, name: 'Image 1', url: 'http://example.com/image1.jpg' },
    ];
    const updatedImage = { id: 1, name: 'Updated Image', url: 'http://example.com/updated-image.jpg' };

    store.dispatch(updateImage(updatedImage));

    const state = store.getState().images;

    expect(state.images).toContainEqual(updatedImage);
  });
});
