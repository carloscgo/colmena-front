import { createWrapper } from 'next-redux-wrapper';
import { makeStore } from '..';

describe('Redux Store', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should configure the store correctly', () => {
    const store = makeStore();

    expect(store).toBeDefined();

    const rootReducer = store.getState();

    expect(rootReducer).toHaveProperty('images');

    const wrapperInstance = createWrapper(makeStore);

    expect(wrapperInstance).toEqual(expect.any(Object));
  });
});
