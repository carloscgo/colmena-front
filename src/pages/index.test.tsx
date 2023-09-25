import { render, screen } from '@testing-library/react';
import IndexPage from '.';

describe('IndexPage', () => {
  it('should render the page correctly', () => {
    render(<IndexPage />);

    expect(screen.getByText('ColmenaLab')).toBeInTheDocument();
    expect(screen.getByText('Bienvenido al reto técnico del Laboratorio Digital Colmena para desarrolladores Frontend.')).toBeInTheDocument();

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('alt', 'Seed');
    expect(image).toHaveAttribute('src', expect.any(String));
    expect(image).toHaveAttribute('width', '536');
    expect(image).toHaveAttribute('height', '354');
  });
});
