import { useEffect } from "react";

import useFetch from "@/hooks/useFetch/useFetch"
import styles from "./PokeCard.module.css"
import Image from "next/image";

export default function PokeCard({url, choose}:any) {
  const {data, loading, error , fetchData} : any= useFetch(url)
  useEffect(() => {
    fetchData()
  }, [choose?.pokemon]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
        <div className={`${styles?.['poke-card']} ${styles.pokemonType} ${styles?.[`type-${data?.color}`]}` } style={{ display: 'flex', alignItems:'center', justifyContent:'center', }}>
          <Image src={data?.image} height={150} width={150} alt={""} />
          <p>{data?.name}</p>
        </div>
    </>
  )
}
