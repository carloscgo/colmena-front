import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardPost from './';

describe('CardPost', () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    mockOnEdit.mockReset();
    mockOnDelete.mockReset();
  });

  it('should render the card with title, body, image, and edit button', () => {
    const props = {
      title: 'Test Title',
      body: 'Test Body',
      image: 'http://test/test.png',
      labelEdit: 'Edit',
      onEdit: mockOnEdit,
    };

    const { getByText, getByTestId } = render(<CardPost {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.body!)).toBeInTheDocument();
    expect(getByTestId('Edit')).toBeInTheDocument();
  });

  it('should call onEdit when the edit button is clicked', () => {
    const props = {
      title: 'Test Title',
      image: 'http://test/test.png',
      labelEdit: 'Edit',
      onEdit: mockOnEdit,
    };

    const { getByTestId } = render(<CardPost {...props} />);
    const editButton = getByTestId('Edit');

    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  it('should render the card without body and delete button', () => {
    const props = {
      title: 'Test Title',
      image: 'http://test/test.png',
      labelDelete: 'Delete',
      onDelete: mockOnDelete,
    };

    const { getByText, getByTestId } = render(<CardPost {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByTestId('Delete')).toBeInTheDocument();
  });

  it('should call onDelete when the delete button is clicked', () => {
    const props = {
      title: 'Test Title',
      image: 'http://test/test.png',
      labelDelete: 'Delete',
      onDelete: mockOnDelete,
    };

    const { getByTestId } = render(<CardPost {...props} />);
    const deleteButton = getByTestId('Delete');

    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
