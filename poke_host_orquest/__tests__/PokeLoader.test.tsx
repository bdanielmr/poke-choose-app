import React from 'react';
import { render } from '@testing-library/react';
import PokeLoader from '@/components/PokeLoader/PokeLoader';

describe('PokeLoader component', () => {
  it('renders PokeLoader component correctly', () => {
    const { getByTestId } = render(<PokeLoader />);
    const wrapperElement = document?.querySelector('.wrapper');
    const pokeballElement = document?.querySelector('.pokeball');

    expect(wrapperElement).toBeInTheDocument(); // Verifica que el elemento wrapper esté presente
    expect(pokeballElement).toBeInTheDocument(); // Verifica que el elemento pokeball esté presente
  });
});
