import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card.js'


export default function Cards() {

    const cardsData = [
        {img: Single, header: "Single User", price: "149", storage: "500GB", users: "1 User", send: "2GB"},
        {img: Double, header: "Parnership", price: "199", storage: "1TB", users: "3 Users", send: "10GB"},
        {img: Triple, header: "Group Account", price: "299", storage: "5TB", users: "10 Users", send: "20GB"},
    ]
   
    return(
        <section className='bg-white text-main w-full py-[10rem]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-cente px-4'>
                {cardsData.map((card, index) => <Card key={index} {...card}/>)}
            </div>
        </section>
    )
}