import React from 'react';
import { render, act } from '@testing-library/react';
import PokeCard from '@/components/PokeCard/PokeCard';
//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'Pikachu',
        sprites: { front_default: 'https://example.com/pikachu.png' },
        types: [{ type: { name: 'electric' } }]
      })
  })
);

describe('PokeCard component', () => {
  it('renders card with data', async () => {
    const { getByText, getByAltText,  } = render(<PokeCard url="https://pokeapi.co/api/v2/pokemon/pikachu" choose={{ pokemon: 'pikachu' }} />);
        // Verificar que se muestra el mensaje de carga
        const firstCard = document?.querySelector('.pokeball');
        expect(firstCard).toHaveClass('pokeball');
    
    await global.fetch;
    await act(async () => {
        // Esta función setTimeout simula un retardo de 2000 milisegundos (2 segundos)
        await global.fetch;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      });
      expect(getByText('Pikachu')).toBeInTheDocument(); // Verifica que el nombre del Pokémon esté presente
  });
  

});
