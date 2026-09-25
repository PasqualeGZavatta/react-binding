import { useState } from "react";

export default function NomeCognomeUnione() {
  const [persona, setPersona] = useState({
    nome: "",
    cognome: "",
  });

  return (
    <div className="container mb-3">
      <div className="">
        <label
          htmlFor="nome"
          className="form-label">
          Nome
        </label>

        <input
          id="nome"
          className="form-control"
          type="text"
          value={persona.nome}
          onChange={(e) => setPersona({ ...persona, nome: e.target.value })}
        />
      </div>
      <div>
        <label
          htmlFor="cognome"
          className="form-label">
          Cognome
        </label>

        <input
          id="cognome"
          className="form-control"
          type="text"
          value={persona.cognome}
          onChange={(e) => setPersona({ ...persona, cognome: e.target.value })}
        />
      </div>

      <p className="m-3">
        Nome e Cognome : {`${persona.nome} ${persona.cognome}`}
      </p>
    </div>
  );
}
