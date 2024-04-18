import { useState, useEffect, useRef } from 'react';

const usePokemonSelection = (initialPokemonChoices:any) => {
  const [selectedCardIds, setSelectedCardIds] = useState(new Set());
  const [showPokeAlert, setShowPokeAlert] = useState(false);
  const [dataPokeAlert, setDataPokeAlert] = useState({});
  const [pokemonChoices, setPokemonChoices] = useState(initialPokemonChoices);

  const cardsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (
        //@ts-ignore
        cardsRef.current && !cardsRef.current.contains(event.target) && !buttonRef?.current.contains(event.target)
      ) {
        // Se hizo clic fuera de las cards, deseleccionar todas las cartas
        setSelectedCardIds(new Set());
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCardClick = (cardId:any) => {
    const updatedSelectedCardIds = new Set(selectedCardIds);

    if (updatedSelectedCardIds.has(cardId)) {
      updatedSelectedCardIds.delete(cardId); // Deseleccionar la carta si ya está seleccionada
    } else {
      updatedSelectedCardIds.add(cardId); // Seleccionar la carta si no está seleccionada
    }

    setSelectedCardIds(updatedSelectedCardIds);
  };

  const getRandomPokemonNumber = () => {
    // Generar un número aleatorio entre 1 y 900
    return Math.floor(Math.random() * 900) + 1;
  };

  const handlePokeButtonClick = () => {
    if (selectedCardIds.size > 0) {
      const updatedPokemonChoices = pokemonChoices.map((choice:any, index:any) => {
        if (selectedCardIds.has(index + 1)) {
          // Si la carta está seleccionada, actualizar el Pokémon
          const randomPokemonNumber = getRandomPokemonNumber();
          return { pokemon: randomPokemonNumber.toString() };
        }
        return choice; // Mantener sin cambios los otros Pokémon
      });

      setPokemonChoices(updatedPokemonChoices);
      setShowPokeAlert(true);
      setDataPokeAlert({ message: 'success', type: 'success' });
    } else {
      setShowPokeAlert(true);
      setDataPokeAlert({ message: 'error', type: 'error' });
    }
  };

  return {
    selectedCardIds,
    showPokeAlert,
    dataPokeAlert,
    pokemonChoices,
    cardsRef,
    buttonRef,
    setShowPokeAlert,
    handleCardClick,
    handlePokeButtonClick
  };
};

export default usePokemonSelection;
