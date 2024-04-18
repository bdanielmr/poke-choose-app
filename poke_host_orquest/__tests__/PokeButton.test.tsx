import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PokeButton from '@/components/PokeButton/PokeButton';

describe('PokeButton component', () => {
  it('renders with default', () => {
    const { getByText } = render(<PokeButton>CAMBIAR</PokeButton>);
    const buttonElement = getByText('CAMBIAR');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button'); // Verifica que la clase del botón sea correcta
  });


  it('calls onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<PokeButton onClick={onClickMock}>CAMBIAR</PokeButton>);
    const buttonElement = getByText('CAMBIAR');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1); // Verifica que la función onClick se haya llamado una vez al hacer clic en el botón
  });

  it('passes additional attributes to button element', () => {
    const { getByText } = render(<PokeButton id="custom-button">CAMBIAR</PokeButton>);
    const buttonElement = getByText('CAMBIAR');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('id', 'custom-button'); // Verifica que el atributo "id" se haya pasado correctamente
  });
});
