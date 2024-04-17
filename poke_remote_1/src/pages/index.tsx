import React, { Suspense } from 'react';
import Head from "next/head";
import Image from "next/image";
import dynamic from 'next/dynamic';


const Home = () => {
  // @ts-ignore
  const ComponentExternal = dynamic(() => import('poke_host_orquest/PokeCard'), {
    loading: () => <p>Loading...</p>, // Componente a mostrar mientras se carga
    ssr: false // Permite que este componente sea renderizado solo en el cliente
  });
  return (
    <>
    <Suspense fallback={'loading...'}>
      <h1>HOLA MUkkNDO DESDE EL REMOTO 2</h1>
      <ComponentExternal />
      </Suspense>
    </>
  );
};

export default Home;