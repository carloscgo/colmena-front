import { renderHook } from '@testing-library/react';
import useSideBar from './useSideBar';

describe('useSideBar', () => {
  it('toggles the sidebar correctly', () => {
    const sidebar = document.createElement('div');
    sidebar.className = '-translate-x-48';

    const { result } = renderHook(() =>
      useSideBar({
        sidebar: { current: sidebar },
        maxSidebar: { current: document.createElement('div') },
        miniSidebar: { current: document.createElement('div') },
        maxToolbar: { current: document.createElement('div') },
        logo: { current: document.createElement('div') },
        content: { current: document.createElement('div') },
      })
    );

    expect(sidebar.classList.contains('-translate-x-48')).toBe(true);

    const openNav = result.current;

    openNav();

    expect(sidebar.classList.contains('-translate-x-48')).toBe(false);

    openNav();

    expect(sidebar.classList.contains('-translate-x-48')).toBe(true);
  });
});
