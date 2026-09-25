import { useState } from "react";

export default function ContatoreCaratteri() {
  const [stringa, setString] = useState("");

  return (
    <>
      <div className="card m-3">
        <label htmlFor=""></label>
        <input
          type="text"
          value={stringa}
          onChange={(e) => setString(e.target.value)}
        />
        <p>length: {stringa.trim().length}</p>
      </div>
    </>
  );
}
