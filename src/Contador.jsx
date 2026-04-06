// src/Contador.jsx
import React, { useState } from 'react';

const Contador = () => {
  // Define o estado inicial 'count' como 0
  const [count, setCount] = useState(0);

  // Função responsável por incrementar o estado
  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button 
        onClick={incrementarContador} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Clique aqui
      </button>
    </div>
  );
};

export default Contador;