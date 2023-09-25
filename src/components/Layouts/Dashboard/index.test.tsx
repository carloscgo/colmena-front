import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './';

describe('Dashboard', () => {
  it('should render the dashboard', () => {
    const { container } = render(<Dashboard>
      example
    </Dashboard>);

    expect(container).toBeInTheDocument();
  });
});
