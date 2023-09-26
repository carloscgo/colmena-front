import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonTheme from '..';
import { useLocalStorage } from '../../../hooks';

jest.mock('../../../hooks', () => ({
  useLocalStorage: jest.fn(),
}));

describe('ButtonTheme', () => {
  const mockUseLocalStorage = useLocalStorage as jest.Mock;

  it('should toggle theme and update CSS classes when moon button is clicked', () => {
    mockUseLocalStorage.mockReturnValue(['light', jest.fn()]);

    const { getByTestId } = render(<ButtonTheme />);
    const moonButton = getByTestId('moon-button');
    const sunButton = getByTestId('sun-button');

    fireEvent.click(moonButton);

    expect(mockUseLocalStorage).toHaveBeenCalled();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);
    expect(moonButton.classList.contains('hidden')).toBe(true);
    expect(sunButton.classList.contains('hidden')).toBe(false);
  });

  it('should toggle theme and update CSS classes when sun button is clicked', () => {
    mockUseLocalStorage.mockReturnValue(['dark', jest.fn()]);

    const { getByTestId } = render(<ButtonTheme />);
    const moonButton = getByTestId('moon-button');
    const sunButton = getByTestId('sun-button');

    fireEvent.click(sunButton);

    expect(mockUseLocalStorage).toHaveBeenCalled();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(moonButton.classList.contains('hidden')).toBe(false);
    expect(sunButton.classList.contains('hidden')).toBe(true);
  });
});
