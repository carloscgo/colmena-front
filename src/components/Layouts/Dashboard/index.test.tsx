import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DashboardLayout from './';
import { appName } from '@/utils/common';

describe('Dashboard', () => {
  it('should render the dashboard', () => {
    const { container } = render(<DashboardLayout>
      example
    </DashboardLayout>);

    expect(container).toBeInTheDocument();
  });

  it('renders the logo correctly', () => {
    render(<DashboardLayout>Children</DashboardLayout>);

    const logoElement = screen.getAllByText(appName)[0];
    expect(logoElement).toBeInTheDocument();
  });

  it('opens the sidebar when clicked', () => {
    render(<DashboardLayout>Children</DashboardLayout>);

    const sidebar = screen.getByTestId('sidebar');
    const openButton = screen.getByTestId('open-button');

    expect(sidebar).toHaveClass('-translate-x-48');

    fireEvent.click(openButton);

    expect(sidebar).not.toHaveClass('-translate-x-48');
  });
});
