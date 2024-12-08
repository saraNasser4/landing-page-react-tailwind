import { ReactTyped } from "react-typed";
import Button from './Btn.js';

export default function Hero () {
    return(
        <div id="home" className='min-w-screen min-h-screen flex flex-col justify-center items-center'>
            <p className='text-second uppercase font-semibold'>Growing with data analytics</p>
            <h1 className='p-3 text-4xl sm:text-6xl lg:text-7xl font-bold'>Grow with data.</h1>
            <div className='flex items-center justify-center gap-3 md:gap-4 text-xl sm:text-4xl p-3'>
                <p>Fast, flexible financing for</p>
                <span className='text-gray-400 max-w-1 font-semibold' >
                    <ReactTyped 
                        strings={['SaaS', 'D2C', 'BTB']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop 
                    />
                </span>
            </div>
            <p className='text-md md:text-xl text-wrap text-gray-600 max-w-[550px] text-center px-6 leading-4'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <Button bg="second" color="main" />
        </div>
    )
}