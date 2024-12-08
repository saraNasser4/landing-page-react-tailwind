import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

export default function Footer() {
    const listItems =[["Analytics", "Marketing", "Commerce", "Insights"], ["Pricing", "Documentation", "Guides", "API Status"], ["About", "Blog", "Jobs", "Press", "Careers"], ["Claims", "Policy", "Terms"]]

    return(
        <footer className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 items-center'>
            <div>
                <h3 className='w-full text-second font-bold text-3xl pb-4'><a href="#home">REACT.</a></h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde sint. Odit enim soluta eos ullam quia reprehenderit esse tenetur laboriosam, repellendus facilis, cumque quis suscipit! Dolore autem ullam quod.
                </p>
                <div className='flex justify-between w-[75%] pt-3 my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between items-start'>
                <div>
                    <h5 className='font-medium text-gray-400'>Solutions</h5>
                    <ul>
                        {listItems[0].map((item, index)=> <li key={index} className='text-sm py-2'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className='font-medium text-gray-400'>Support</h5>
                    <ul>
                        {listItems[1].map((item, index)=> <li key={index} className='text-sm py-2'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className='font-medium text-gray-400'>Company</h5>
                    <ul>
                        {listItems[2].map((item, index)=> <li key={index} className='text-sm py-2'>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className='font-medium text-gray-400'>Legal</h5>
                    <ul>
                        {listItems[3].map((item, index)=> <li key={index} className='text-sm py-2'>{item}</li>)}
                    </ul>
                </div>

            </div>
        </footer>
    )
}