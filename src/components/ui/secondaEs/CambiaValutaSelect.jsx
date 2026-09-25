import { useState } from "react";

export default function CambiaValutaSelect() {
  const [ammount, setAmmount] = useState("");
  const [valuta, setValuta] = useState("dollari");

  const euro = 0.88;
  const sterline = 0.75;

  console.log(typeof ammount);

  const calcolaConversione = () => {
    const num = Number(ammount);
    if (!num) return;

    if (valuta === "euro") {
      return (num * euro).toFixed(2) + " € ";
    } else if (valuta === "sterline") {
      return (num * sterline).toFixed(2) + " £";
    } else {
      return num.toFixed(2) + " $";
    }
  };

  return (
    <div className="container mb-3">
      <h3>Importo</h3>
      <div className="container d-flex justify-content-left gap-5">
        <input
          type="number"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
        />
        <select
          className="form-select w-25"
          aria-label="Default select example"
          value={valuta}
          onChange={(e) => setValuta(e.target.value)}>
          <option value="dollari">Dollari</option>
          <option value="euro">Euro</option>
          <option value="sterline">Sterline</option>
        </select>
      </div>
      <p className="m-4">{`Conversione: ${ammount === "" ? "" : calcolaConversione()}  `}</p>
    </div>
  );
}
