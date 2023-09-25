import { render, screen } from '@testing-library/react';
import Nav from './';

const mockPrevious = [
  {
    label: 'Home',
    icon: <div>Icon</div>,
    route: '/'
  },
  {
    label: 'Products',
    icon: <div>Icon</div>,
  }
];

describe('Nav', () => {
  it('should render the previous items correctly', () => {
    const current = 'Current Page';

    render(<Nav current={current} previous={mockPrevious} />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const productsLink = screen.getByText('Products');
    expect(productsLink).toBeInTheDocument();
  });

  it('should render the current item correctly', () => {
    const current = 'Current Page';

    render(<Nav current={current} previous={mockPrevious} />);

    const currentText = screen.getByText(current);
    expect(currentText).toBeInTheDocument();
  });

  it('should set the correct href attribute for previous items', () => {
    const current = 'Current Page';

    render(<Nav current={current} previous={mockPrevious} />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('href', '/');

    const productsLink = screen.getByText('Products');
    expect(productsLink).toHaveAttribute('href', '#');
  });
});
