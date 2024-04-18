import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import usePokemonSelection from '@/hooks/usePokemonSelection/usePokemonSelection';

describe('usePokemonSelection hook', () => {
    const Home = () => {
        const initialPokemonChoices = [
          { pokemon: 'pikachu' },
          { pokemon: 'charmander' },
          { pokemon: 'bulbasaur' }
        ];
      
        const {
          selectedCardIds,
          showPokeAlert,
          dataPokeAlert,
          pokemonChoices,
          cardsRef,
          buttonRef,
          setShowPokeAlert,
          handleCardClick,
          handlePokeButtonClick
        } = usePokemonSelection(initialPokemonChoices);
      
        return (
          <>
            <div ref={buttonRef}>
              <button onClick={handlePokeButtonClick}>CAMBIAR</button>
            </div>
            <div ref={cardsRef}>
              {[1, 2, 3].map((cardId) => (
                <div
                  key={cardId}
                  className={`${ selectedCardIds.has(cardId) ? '' : 'selected'}`}
                  
                >
                  {/** @ts-ignore */
                  cardId === 1 && <p> card {cardId}</p>}
                  {/** @ts-ignore */
                  cardId === 2 && <p> card {cardId}</p>}
                  {/** @ts-ignore */
                  cardId === 3 && <p> card {cardId}</p>}
                </div>
              ))}
            </div>

          </>
      
        );
      };

  test('should initialize with default values', () => {
    const { container, getByText } = render(<Home />);


    // Click on a card
    const firstCard = container.querySelector('div:nth-child(1)'); 
    fireEvent.click(firstCard);
    expect(screen.getByText('card 1')).toBeInTheDocument();

  });
});
