import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    //funcions
    function handleIncrement() {
        setCount(count + 1)
    }

    function handleReset() {
        setCount(0)
    }


    return (
        <>
            <section>
                <p className="text-center display-1 "> {count}</p>
                <div className="d-flex justify-content-center gap-2">

                    <button className="btn btn-primary "
                        onClick={handleIncrement}
                    > Incrementa
                    </button>

                    <button className="btn btn-secondary"
                        onClick={handleReset}
                    > Reset
                    </button>
                </div>
            </section>
        </>
    )
}