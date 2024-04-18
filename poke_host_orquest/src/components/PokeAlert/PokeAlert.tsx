import React, { useState, useEffect } from 'react';

interface PokeAlertProps {
  showAlert: boolean;
  onCloseAlert: () => void; // Callback para cerrar la alerta
  dataAlert:any;
}

const PokeAlert: React.FC<PokeAlertProps> = ({ showAlert, onCloseAlert, dataAlert }) => {
  const [isVisible, setIsVisible] = useState(showAlert);

  useEffect(() => {
    // Mostrar la alerta cuando showAlert cambia a true
    setIsVisible(showAlert);

    // Si showAlert es true, configurar un temporizador para ocultar la alerta después de 3 segundos
    if (showAlert) {
      const timeoutId = setTimeout(() => {
        onCloseAlert(); // Llamar a la función para cerrar la alerta
      }, 3000); // Tiempo en milisegundos (3 segundos)

      // Limpiar el temporizador al desmontar la componente
      return () => clearTimeout(timeoutId);
    }
  }, [showAlert, onCloseAlert]);

  // Renderizar la alerta solo si isVisible es true
  return isVisible ? (
    <div
      style={{
        position: 'fixed',
        top: '15%',
        left: '85%',
        transform: 'translate(-50%, -50%)',
        padding: '1px 10px',
        backgroundColor: dataAlert?.type==='success'? 'lightblue': 'lightcoral',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        width:'280px',
        height: '80px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}
    >

      <span>Poke Alert!</span>
      <span>{dataAlert?.message}</span>
    </div>
  ) : null;
};

export default PokeAlert;
