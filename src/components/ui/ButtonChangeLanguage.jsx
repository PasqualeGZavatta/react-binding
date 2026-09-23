import { useState } from "react";

export default function ButtonChangeLanguage() {

    const benvenuto = [
        'Benvenuto su React',
        'Welcome to React',
        'Bienvenue sur React',
        'Bienvenido a React',
        'Willkommen bei React'
    ];



    const [language, setLanguage] = useState(benvenuto[0])


    function handleLanguage(index) {

        setLanguage(benvenuto[index])

    }



    return (
        <>
            <section className="text-center">
                <button key={0} type="button" className={`btn btn-primary`}
                    onClick={() => handleLanguage(0)}
                >Italiano</button>

                <button key={1} type="button" className="btn btn-secondary"
                    onClick={() => handleLanguage(1)}
                >Inglese</button>

                <button key={2} type="button" className="btn btn-success"
                    onClick={() => handleLanguage(2)}
                >Francese</button>

                <button key={3} type="button" className="btn btn-danger"
                    onClick={() => handleLanguage(3)}
                >Spagnolo</button>

                <button key={4} type="button" className="btn btn-warning"
                    onClick={() => handleLanguage(4)}
                >Tedesco</button>



            </section>

            {/* <div className="btn-group">

            </div> */}




            <p className="text-center display-4 p-3">{language}</p>
        </>
    )
}