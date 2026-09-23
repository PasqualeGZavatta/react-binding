import { Square } from 'lucide-react';

import { useState } from "react"

export default function Lista() {



    const [toDo, setToDo] = useState('');
    const [listEl, setListEl] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    //funcions

    function handleAddToList() {
        setListEl([...listEl, toDo])
        setToDo('')


    }


    function handleCancelInput() {
        setToDo('')
    }



    function handleisChecked() {
        setIsChecked(true)
    }



    return (
        <>
            <div className="card  py-1 "
                style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}
            >

                <div>
                    <div className="mb-3 "
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <input
                            style={{ width: 500 }}
                            type="text"
                            onChange={(e) => setToDo(e.target.value)}
                            value={toDo}
                        />

                    </div>
                </div>



                <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', }}>

                    <button className="btn btn-primary"
                        style={{ height: 50, width: 100 }}
                        onClick={handleAddToList}
                    >Aggiungi</button>

                    <button className="btn btn-secondary"
                        style={{ height: 50, width: 100 }}
                        onClick={handleCancelInput}
                    >Canc</button>

                </section>






            </div >


            {/**LISTA GENERATA */}
            <section>
                <ul className="list-unstyled px-4 py-2">

                    {listEl.map((item, index) => (
                        <li key={index} className="d-flex align-items-center mb-2">
                            <button
                                onClick={handleisChecked}
                            ><Square /></button>
                            <span className={`p-2 ${(isChecked) ? 'text-decoration-line-through' : ''}`}>{item}</span>
                        </li>
                    ))}

                </ul>


            </section>
        </>
    )
}