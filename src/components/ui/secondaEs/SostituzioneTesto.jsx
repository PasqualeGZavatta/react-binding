import { useState } from "react";

export default function SostituzioneTesto() {
  const [newString, setNewString] = useState("First h1");

  return (
    <>
      <div className="container mb-3">
        <label
          className="form-label"
          htmlFor="">
          Sostituire con:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          onChange={(e) => setNewString(e.target.value)}
        />

        <h1 className="text-center">{newString}</h1>
      </div>
    </>
  );
}
