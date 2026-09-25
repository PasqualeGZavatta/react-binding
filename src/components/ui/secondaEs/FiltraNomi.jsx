import { useState } from "react";
import { citta } from "../../../lib/vars";

export default function FiltraNomi() {
  const [nomeCittà, setNomeCittà] = useState("");

  const filteredCity = citta.filter((item) =>
    item.toLowerCase().includes(nomeCittà.toLowerCase()),
  );

  console.log(citta);

  return (
    <>
      <div className="card m-3">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setNomeCittà(e.target.value)}
        />
        <ul>
          {filteredCity.map((city, index) => (
            <li
              key={index}
              value={nomeCittà}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
