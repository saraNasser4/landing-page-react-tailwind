import React, {useState} from 'react'

export default function Card({img, header, price, storage, users, send}) {
    const [state, setState] = useState(false)
    const handlerClick = ()=> {
        setState("")
        setState(!state)
    }
    
    return(
        <div className={`max-w-[350px] min-w-[300px] rounded shadow-2xl text-center flex flex-col justify-center mb-[3rem] duration-300 ease-in-out ${state ? 'bg-gray-200 scale-105 mt-4' : 'bg-white'}`}>
            <img className='w-20 mx-auto mt-[-3rem]' src={img} alt='/photo' />
            <h4 className='font-black text-2xl md:text-3xl py-6'>{header}</h4>
            <p className='font-bold text-xl md:text-2xl'>${price}</p>
            <div className='text-md md:text-lg font-semibold my-4 [&>*]:border-b'>
                <p>{storage} Storage</p>
                <p>{users} Allowed</p>
                <p>Send up to {send}</p>

            </div>
            <button className={`self-center rounded-xl px-6 py-2 mt-5 mb-[3rem] font-bold ${state? 'text-second  bg-main': 'bg-second text-main'}`} onClick={handlerClick}>Start Trail</button>

        </div>
    )
}