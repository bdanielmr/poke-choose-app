import { render, act} from '@testing-library/react';
import { useEffect } from 'react';
import useFetch from '@/hooks/useFetch/useFetch';

// Mockear la función global fetch para simular respuestas
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

describe('useFetch hook', () => {
  it('fetches data correctly', async () => {
    // Renderizar un componente que utilice el hook useFetch
    const TestComponent = () => {
      const { data, loading, error, fetchData }:any = useFetch('https://pokeapi.co/api/v2/pokemon/pikachu');

      useEffect(() => {
        fetchData(); // Llamar a fetchData inmediatamente
      }, []);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

      return (
        <div>
          <h1>{data?.name}</h1>
        </div>
      );
    };

    const { getByText, getByAltText } = render(<TestComponent />);

    // Verificar que se muestra el mensaje de carga
    expect(getByText('Loading...')).toBeInTheDocument();

    // Esperar a que se resuelva la promesa de fetchData
    await global.fetch;
    await act(async () => {
        // Esta función setTimeout simula un retardo de 2000 milisegundos (2 segundos)
        await global.fetch;
        await new Promise((resolve) => setTimeout(resolve, 2000));
      });
    // Verificar que los datos se renderizan correctamente después de la carga
    expect(getByText('Pikachu')).toBeInTheDocument();
  });
});
