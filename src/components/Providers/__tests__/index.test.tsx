import { render } from '@testing-library/react';
import Providers from '..';

describe('Providers', () => {
  it('should render child components', () => {
    const ChildComponent = () => <div>Child Component</div>;

    const { getByText } = render(
      <Providers>
        <ChildComponent />
      </Providers>
    );

    const childComponent = getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});
