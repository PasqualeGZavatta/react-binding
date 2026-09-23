import { TextAlignStart } from 'lucide-react';
import { TextAlignCenter } from 'lucide-react';
import { TextAlignEnd } from 'lucide-react';
import { useState } from 'react';




export default function TextAlign() {



    const [align, setAlign] = useState('text-left')

    // funcions
    function handleAlignLeft() {
        setAlign('text-start')
    }


    function handleAlignCenter() {
        setAlign('text-center')
    }

    function handleAlignRight() {
        setAlign('text-end')
    }

    return (
        <>
            <section className='text-center'>
                <button className='btn btn-white text-gray'
                    onClick={handleAlignLeft}
                >
                    <TextAlignStart />
                </button>

                <button className={`btn btn-white text-gray `}
                    onClick={handleAlignCenter}
                >
                    <TextAlignCenter />
                </button>

                <button className='btn btn-white text-gray'
                    onClick={handleAlignRight}
                >
                    <TextAlignEnd />
                </button>

            </section >
            <div className='card pt-0 mx-5'>

                <p className={`${align}`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Sed aperiam minus temporibus libero molestiae assumenda deleniti quas omnis,
                    <br />
                    reiciendis autem ipsum magni vitae consectetur dolor quia consequuntur possimus nisi ab.</p>
            </div>


        </>
    )
}

