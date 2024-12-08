import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
    const listItems = ['Home', 'Company', 'Resources', 'About', 'Contant']
    const printItems = listItems.map((item, index) => <li className='p-4 text-lg border-b hover:border-second border-gray-600 md:border-none' key={index}><a href={`#${item.toLowerCase()}`} className='cursor-pointer hover:text-second'>{item}</a></li>)
    
    const [nav, setNav] = useState(true)
    const handleNav = ()=> setNav(!nav)
    return (
        <header className='z-[1000] fixed top-0 left-1/2 transform -translate-x-1/2 max-w-[1240px] rounded-b-xl w-full h-24 flex items-center px-6 bg-main'>
            <p className='w-full text-second font-bold text-3xl'><a href="#home">REACT.</a></p>
            <ul className='md:flex hidden'>
                {printItems}
            </ul>
            <div className='block md:hidden'>
                <div onClick={handleNav} className='cursor-pointer'>
                    {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <div className={`fixed  w-[60%] h-screen  ease-in-out duration-500 bg-main top-20 ${!nav ? 'left-0': 'left-[-100%]'}`}>
                    <ul>{printItems}</ul>
                </div>
            </div>
        </header>
    )
}