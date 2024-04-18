import React, { ButtonHTMLAttributes } from 'react';
import styles from './PokeButton.module.css';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const PokeButton: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default PokeButton;
