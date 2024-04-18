import React, { ButtonHTMLAttributes } from 'react';
import styles from './PokeButton.module.css';

// Definición de tipos para las propiedades del componente
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Puedes agregar propiedades específicas para tu componente aquí
  variant?: 'primary' | 'secondary';
}

// Componente funcional de botón
const PokeButton: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  // Establecer las clases CSS según la variante del botón
  const buttonClassName = variant === 'primary' ? 'primary-button' : 'secondary-button';

  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default PokeButton;
