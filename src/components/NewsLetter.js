import Button from './Btn.js'
export default function NewsLetter() {
    return(
        <section id="contact" className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center mx-auto p-8 max-w-[1460px]'>
            <div className='lg:col-span-2'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Want tip & tricks to optimize your flow?</h3>
                <p className='font-semibold py-4'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <form className='flex flex-col flex-wrap md:flex-row md:items-center gap-2'>
                    <input className='caret-second outline-none rounded-md px-6 py-3 lg:min-w-64 text-main' type="email" placeholder="Enter your email"/>
                    <Button text="Notify me" />
                </form>
                <p>We care about the protection of your date. Read our <a className='text-second underline underline-offset-2' href="/">Privacy Policy</a></p>
            </div>
        </section>
    )
}