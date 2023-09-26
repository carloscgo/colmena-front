import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should return initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [state] = result.current;

    expect(state).toBe('initialValue');
  });

  it('should read from localStorage when it has a stored value', () => {
    window.localStorage.setItem('testKey', JSON.stringify('storedValue'));

    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [state] = result.current;

    expect(state).toBe('storedValue');
  });

  it('should update the value in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    let [state, setValue] = result.current;

    act(() => {
      setValue('updatedValue');
    });

    [state, setValue] = result.current;

    expect(state).toBe('updatedValue');
    expect(JSON.parse(window.localStorage.getItem('testKey') || '')).toBe('updatedValue');
  });

  it('should handle errors gracefully', () => {
    jest.spyOn(window.localStorage, 'getItem').mockImplementation(() => {
      throw new Error('localStorage error');
    });

    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [state] = result.current;

    expect(state).toBe('initialValue');
  });
});
