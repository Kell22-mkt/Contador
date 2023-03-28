import { Component, useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;
