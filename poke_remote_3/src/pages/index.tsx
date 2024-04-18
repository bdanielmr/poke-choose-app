import React, { useEffect, useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import dynamic from 'next/dynamic';

  // @ts-ignore
  const PokeCard = dynamic(() => import('poke_host_orquest/PokeCard'), {
    loading: () => <p>Loading...</p>, // Componente a mostrar mientras se carga
    ssr: false // Permite que este componente sea renderizado solo en el cliente
  });

const Home = ({ choose }: { choose: { pokemon: string } }) => {
  const defaultChoose = choose || { pokemon: 'bulbasaur' };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* @ts-ignore*/}
        <PokeCard choose={defaultChoose} url={`https://pokeapi.co/api/v2/pokemon/${defaultChoose.pokemon}`} />
      </div>
    </>
  );
};

export default Home;

