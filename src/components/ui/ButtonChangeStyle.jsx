import { useState } from "react"

export default function ButtonChangeStyle() {


    const primaryText = 'Change to Secondary';
    const secondaryText = 'Change to Primary'

    const [style, setStyle] = useState(primaryText)
    const [isPrimary, setIsPrimary] = useState(true)

    //funcions

    function handleChangeStyle() {
        setStyle(((isPrimary === true) ? secondaryText : primaryText))
        handlePrimaryState()

    }

    function handlePrimaryState() {
        setIsPrimary(!isPrimary)
    }


    return (
        <>
            <section className="text-center">
                <button className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={handleChangeStyle}
                >{style}</button>
            </section >

        </>
    )
}