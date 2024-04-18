import React from 'react';
import styles from './PokeLoader.module.css'
interface PokeLoaderProps {

}

const PokeLoader: React.FC<PokeLoaderProps> = ( ) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.pokeball}>
     </div>
    </div>
  )
};

export default PokeLoader;
