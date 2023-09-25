import { render, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ImagesPage from './';

const mockStore = configureStore([]);

describe('ImagesPage', () => {
  let store: any;

  beforeEach(() => {
    jest.clearAllMocks();

    store = mockStore({
      images: {
        images: [
          { id: '1', name: 'Image 1', url: 'https://example.com/image1.jpg' },
          { id: '2', name: 'Image 2', url: 'https://example.com/image2.jpg' },
        ],
      },
    });
  });

  const getComponent = (storeData: any) => render(
    <Provider store={storeData}>
      <ImagesPage />
    </Provider>
  );

  it('should render the page correctly', () => {
    const { getByText } = getComponent(store);

    expect(getByText('new image')).toBeInTheDocument();
  });

  it('should open the modal when "new image" button is clicked', async () => {
    const { getByText, container } = getComponent(store);

    fireEvent.click(getByText('new image'));

    await act(() => {
      expect(getByText('Add new image')).toBeInTheDocument();
    });
  });

  it('should delete an image when the delete button on a card is clicked', () => {
    const { getAllByTestId } = getComponent(store);

    const deleteButtons = getAllByTestId('Delete');

    fireEvent.click(deleteButtons[0]);

    expect(store.getActions()).toEqual(expect.any(Array));
  });
});
