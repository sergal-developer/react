import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {
    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosCola = useRef(numeroSaludo);

    useEffect(() => {
        saludosCola.current = numeroSaludo;
        setTimeout(() => {
            //setNumeroSaludo(numeroSaludo + 1);
            console.log("Mensajes en cola " + saludosCola.current);
        }, 3000);
    }, [numeroSaludo]);

    const enviarSaludo = e => {
        console.log("saludo enviado");
        setNumeroSaludo(numeroSaludo + 1);
    }

  return (
    <div>
        
        <h1>Ejemplo useReft</h1>

        <h2>Saludos enviados: { saludosCola.current }</h2>

        <button type="button" onClick={ enviarSaludo }>Enviar saludo</button>
    </div>
  )
}
