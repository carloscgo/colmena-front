import React from 'react';
import { render } from '@testing-library/react';
import MetaTags from '..';

describe('MetaTags', () => {
  it('should render the appropriate meta tags', () => {
    const { container } = render(<MetaTags />);

    expect(container).toBeInTheDocument();
  });
});
