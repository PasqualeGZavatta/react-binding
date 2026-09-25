import { useState } from "react";

export default function TextDimensionRadio() {
  const [fontSize, setFontSize] = useState("piccolo");

  return (
    <div className="container mb-3">
      <div className="mb-3">
        <div>
          <input
            type="radio"
            id="piccolo"
            value="piccolo"
            className="form-check-input me-2"
            checked={fontSize === "piccolo"}
            onChange={(e) => setFontSize(e.target.value)}
          />
          <label
            htmlFor="piccolo"
            className="form-check-label">
            Piccolo
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="normale"
            value="normale"
            className="form-check-input me-2"
            checked={fontSize === "normale"}
            onChange={(e) => setFontSize(e.target.value)}
          />
          <label
            htmlFor="normale"
            className="form-check-label">
            Normale
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="grande"
            value="grande"
            className="form-check-input me-2"
            checked={fontSize === "grande"}
            onChange={(e) => setFontSize(e.target.value)}
          />
          <label
            htmlFor="grande"
            className="form-check-label">
            Grande
          </label>
        </div>
      </div>
      <p
        className={`${fontSize === "piccolo" ? "fs-6" : ""}
      ${fontSize === "normale" ? "fs-4" : ""}
      ${fontSize === "grande" ? "fs-2" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo
        dicta, dolor nemo alias velit dolore voluptatum necessitatibus et ut
        odio autem ad excepturi harum aperiam saepe. Magni, fugiat voluptatibus.
      </p>
    </div>
  );
}
