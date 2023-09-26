import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalFormImage, { schema } from '..';
import { act } from 'react-dom/test-utils';

describe('ModalFormImage', () => {
  const mockInputs = {
    id: '1',
    name: 'Test Image',
    url: 'https://example.com/image.jpg',
  };

  const mockOnSubmit = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(
      <ModalFormImage
        title='Add Image'
        inputs={mockInputs}
        onSubmit={mockOnSubmit}
        onClose={mockOnClose}
      />
    );
  });

  it('should render the form with pre-filled values', () => {
    expect(screen.getByLabelText('Name')).toHaveValue('Test Image');
    expect(screen.getByLabelText('Url')).toHaveValue('https://example.com/image.jpg');
  });

  it('should call onSubmit when the submit button is clicked', () => {
    fireEvent.click(screen.getByText('Submit'));

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('should call onClose when the cancel button or close button is clicked', () => {
    fireEvent.click(screen.getByText('Cancel'));

    expect(mockOnClose).toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'close modal' }));

    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  it('should match the validation schema defined in Yup', () => {
    const validData = {
      name: 'Valid Name',
      url: 'https://example.com/valid.jpg',
    };
    const invalidData = {
      name: 'A',
      url: 'invalid-url',
    };

    expect(schema.isValidSync(validData)).toBe(true);
    expect(schema.isValidSync(invalidData)).toBe(false);
  });
});
