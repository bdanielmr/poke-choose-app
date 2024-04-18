
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('CAMBIAR')).toBeInTheDocument();
  });

  it('updates selected cards on click', () => {
    render(<Home />);

    // Simular clic en la primera carta por clase
    const firstCard = document?.querySelector('.poke-card:nth-child(1)');
    fireEvent.click(firstCard);
    expect(firstCard).toHaveClass('selected');

    // Simular clic en la segunda carta por clase
    const secondCard = document.querySelector('.poke-card:nth-child(2)');
    fireEvent.click(secondCard);
    expect(secondCard).toHaveClass('selected');
  });

  it('displays alert on button click with selected cards', () => {
    render(<Home />);

    // Simular clic en la primera y tercera carta
    const firstCard = document?.querySelector('.poke-card:nth-child(1)');
    fireEvent.click(firstCard);
    const secondCard = document.querySelector('.poke-card:nth-child(2)');
    fireEvent.click(secondCard);

    // Simular clic en el botón "CAMBIAR"
    fireEvent.click(screen.getByText('CAMBIAR'));

    // Verificar que la alerta se muestra
    expect(screen.getByText('Poke Alert!')).toBeInTheDocument();
    expect(screen.getByText('Cambio exitoso')).toBeInTheDocument();
  });

  it('displays alert error when dont choose any card', () => {
    render(<Home />);

    // Simular clic en el botón "CAMBIAR"
    fireEvent.click(screen.getByText('CAMBIAR'));

    // Verificar que la alerta se muestra
    expect(screen.getByText('Poke Alert!')).toBeInTheDocument();
    expect(screen.getByText('Escoge un pokemon')).toBeInTheDocument();
  });
});
