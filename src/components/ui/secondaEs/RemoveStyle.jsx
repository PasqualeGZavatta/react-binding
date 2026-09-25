import { useState } from "react";

export default function RemoveStyle() {
  const [isClicked, setIsClicked] = useState({
    grassetto: false,
    corsivo: false,
    sottolineato: false,
    evidenziato: false,
  });

  return (
    <div className="container mb-3 ">
      <p
        className={`
            ${isClicked.grassetto ? "fw-bold" : ""}
            ${isClicked.corsivo ? "fst-italic" : ""}
            ${isClicked.sottolineato ? "text-decoration-underline" : ""}
            ${isClicked.evidenziato ? "bg-warning" : ""}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quos
        quibusdam minima dolore, commodi nesciunt architecto possimus odio dicta
        dolor consequatur veniam itaque, et deleniti obcaecati ex ipsam eum
        blanditiis.
      </p>
      <div>
        <input
          type="checkbox"
          className=""
          checked={isClicked.grassetto}
          onChange={(e) =>
            setIsClicked({ ...isClicked, grassetto: e.target.checked })
          }
        />
        <span className="m-2">Grassetto</span>
      </div>

      <div>
        <input
          type="checkbox"
          className=""
          checked={isClicked.corsivo}
          onChange={(e) =>
            setIsClicked({ ...isClicked, corsivo: e.target.checked })
          }
        />
        <span className="m-2">Corsivo</span>
      </div>

      <div>
        <input
          type="checkbox"
          checked={isClicked.sottolineato}
          onChange={(e) =>
            setIsClicked({ ...isClicked, sottolineato: e.target.checked })
          }
        />
        <span className="m-2">Sottolineato</span>
      </div>

      <div>
        <input
          type="checkbox"
          checked={isClicked.evidenziato}
          onChange={(e) =>
            setIsClicked({ ...isClicked, evidenziato: e.target.checked })
          }
        />
        <span className="m-2">Evidenziato</span>
      </div>

      {/* <p className="fw-bold">Questo è un testo in grassetto</p>
      <p className="fst-italic">Questo è un testo in corsivo</p>
      <p className="text-decoration-underline">
        Questo è un testo sottolineato
      </p>
      <p>
        Questo è un testo <mark>evidenziato</mark>
      </p> */}
    </div>
  );
}
