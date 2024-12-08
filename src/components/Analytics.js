import Laptop from '../assets/laptop.jpg';
import Button from './Btn';

export default function Analytics() {
    return (
        <section id="company" className='w-full bg-white text-main p-10'>
            <div className='grid lg:grid-cols-2 gap-6 max-w-[1240px] mx-auto items-center '>
                <div>
                    <img className='w-[500px] mx-auto'src={Laptop} alt='laptop img'/>
                </div>
                <div className=''>
                    <p className='text-second font-black uppercase text-xl lg:text-3xl'>Data analytics dashboard</p>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold capitalize py-4'>Manage data analytics dashboard</h2>
                    <p className='leading-5 text-gray-600 font-semibold'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde sint. Odit enim soluta eos ullam quia reprehenderit esse tenetur laboriosam, repellendus facilis, cumque quis suscipit! Dolore autem ullam quod.
                    </p>
                    <Button bg="main" color="second"/>
                </div>
            </div>
        </section>
    )
}