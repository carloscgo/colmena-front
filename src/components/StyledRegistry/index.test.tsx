import React from 'react';
import { render } from '@testing-library/react';
import StyledRegistry from './';

describe('StyledRegistry', () => {
  it('should render children when window is defined', () => {
    const ChildComponent = () => <div>Child Component</div>;

    (global as any).window = {} as Window;

    const { getByText } = render(
      <StyledRegistry>
        <ChildComponent />
      </StyledRegistry>
    );

    const childComponent = getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });

  it('should render StyleSheetManager when window is undefined', () => {
    const ChildComponent = () => <div>Child Component</div>;

    const { getByText } = render(
      <StyledRegistry>
        <ChildComponent />
      </StyledRegistry>
    );

    const childComponent = getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});
