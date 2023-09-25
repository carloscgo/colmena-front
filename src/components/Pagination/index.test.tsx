import { render, screen } from '@testing-library/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Pagination from './';

describe('Pagination', () => {
  it('should render the previous button correctly', () => {
    const count = 10;
    const currentPage = 3;

    render(<Pagination count={count} currentPage={currentPage} />);

    const prevButton = screen.getByText('Prev');
    expect(prevButton).toBeInTheDocument();
  });

  it('should render the next button correctly', () => {
    const count = 10;
    const currentPage = 3;

    render(<Pagination count={count} currentPage={currentPage} />);

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();
  });

  it('should disable previous button on first page', () => {
    const count = 10;
    const currentPage = 1;

    render(<Pagination count={count} currentPage={currentPage} />);

    const prevButton = screen.getByText('Prev');
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('should disable next button on last page', () => {
    const count = 10;
    const currentPage = 10;

    render(<Pagination count={count} currentPage={currentPage} />);

    const nextButton = screen.getByText('Next');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('should enable previous button when not on first page', () => {
    const count = 10;
    const currentPage = 3;

    render(<Pagination count={count} currentPage={currentPage} />);

    const prevButton = screen.getByText('Prev');
    expect(prevButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('should enable next button when not on last page', () => {
    const count = 10;
    const currentPage = 8;

    render(<Pagination count={count} currentPage={currentPage} />);

    const nextButton = screen.getByText('Next');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
  });
});
