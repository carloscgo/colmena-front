import React from 'react';
import { render } from '@testing-library/react';
import StyledRegistry from './';

describe('StyledRegistry', () => {
  it('renders children on the client side', () => {
    (global as any).window = {} as Window;

    const { container, getByTestId } = render(
      <StyledRegistry>
        <div data-testid='child'>Hello World</div>
      </StyledRegistry>
    );

    expect(getByTestId('child').textContent).toBe(
      'Hello World'
    );
  });

  it('renders StyleSheetManager on the server side', () => {
    const { container } = render(
      <StyledRegistry>
        <div data-testid='child'>Hello World</div>
      </StyledRegistry>
    );

    expect((container.firstChild as HTMLElement)?.nodeName).toBe('DIV');
  });
});
