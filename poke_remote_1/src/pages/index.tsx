import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const ComponentExternal = dynamic(()=> import("poke_host_orquest/PokeCard"),{
srr: false,
suspense: true
})

const Home = (props) => {
  return (
    <>
      <h1>HOLA MUkkNDO DESDE EL REMOTO 2</h1>
      <ComponentExternal />
    </>
  );
};

export default Home;