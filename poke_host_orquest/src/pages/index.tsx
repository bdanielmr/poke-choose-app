import React from 'react';
import dynamic from 'next/dynamic';
import PokeButton from '@/components/PokeButton/PokeButton';
import PokeAlert from '@/components/PokeAlert/PokeAlert';
import styles from '@/styles/Home.module.css';
import usePokemonSelection from '@/hooks/usePokemonSelection/usePokemonSelection';

//@ts-ignore
const PokeRemote1 = dynamic(() => import('poke_remote_1/pages/index'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
//@ts-ignore
const PokeRemote2 = dynamic(() => import('poke_remote_2/pages/index'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
//@ts-ignore
const PokeRemote3 = dynamic(() => import('poke_remote_3/pages/index'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

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
      Remoteo Orquesta
      <div style={{ width: '20%', margin: '2rem', }} ref={buttonRef}>
        <PokeButton onClick={handlePokeButtonClick}>Cambiar</PokeButton>
      </div>
      <div className={`${styles['poke-container']}`} ref={cardsRef}>
        {[1, 2, 3].map((cardId) => (
          <div
            key={cardId}
            className={`${styles['poke-card']} ${selectedCardIds.has(cardId) ? styles['selected'] : ''}`}
            onClick={() => handleCardClick(cardId)}
          >
            {/** @ts-ignore */
            cardId === 1 && <PokeRemote1 choose={pokemonChoices[0]} />}
            {/** @ts-ignore */
            cardId === 2 && <PokeRemote2 choose={pokemonChoices[1]} />}
            {/** @ts-ignore */
            cardId === 3 && <PokeRemote3 choose={pokemonChoices[2]} />}
          </div>
        ))}
      </div>
      <PokeAlert showAlert={showPokeAlert} dataAlert={dataPokeAlert} onCloseAlert={() => setShowPokeAlert(false)} />
    </>
  );
};

export default Home;
