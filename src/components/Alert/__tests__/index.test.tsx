import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from '../';

describe('Alert', () => {
  const mockProps = {
    message: 'Test message',
    type: 'info' as any,
    title: 'Test title',
    showClose: true,
  };

  it('renders without errors', () => {
    const { getByText } = render(<Alert {...mockProps} />);

    expect(getByText(mockProps.message)).toBeInTheDocument();
  });

  it('displays the correct message and title', () => {
    const { getByText } = render(<Alert {...mockProps} />);
    const messageElement = getByText(mockProps.message);
    const titleElement = getByText(mockProps.title);

    expect(messageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it('hides the component when show is false', () => {
    const { getByTestId, container } = render(<Alert {...mockProps} />);

    fireEvent.click(getByTestId('btn-close'));

    expect(container).toBeInTheDocument();
  });
});
