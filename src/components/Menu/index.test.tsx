import React from 'react';
import { render } from '@testing-library/react';
import Menu from './';

describe('Menu', () => {
  const maxSidebarRef = { current: null };
  const miniSidebarRef = { current: null };

  it('should render the menu with items and icons in the max sidebar', () => {
    const { getByText } = render(
      <Menu maxSidebar={maxSidebarRef} miniSidebar={miniSidebarRef} />
    );

    expect(maxSidebarRef.current).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('List')).toBeInTheDocument();
    expect(getByText('Images')).toBeInTheDocument();
  });

  it('should render the menu with icons only in the mini sidebar', () => {
    const { getByText } = render(
      <Menu maxSidebar={maxSidebarRef} miniSidebar={miniSidebarRef} />
    );

    expect(miniSidebarRef.current).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('List')).toBeInTheDocument();
    expect(getByText('Images')).toBeInTheDocument();
  });
});
