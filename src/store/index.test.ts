import { createWrapper } from 'next-redux-wrapper';
import { makeStore } from './';

describe('Redux Store', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should configure the store correctly', () => {
    const wrapperInstance = createWrapper(makeStore);

    expect(wrapperInstance).toEqual(expect.any(Object));
  });
});
