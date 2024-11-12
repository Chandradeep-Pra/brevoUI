import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section className='flex bg-lightGreen py-16 px-10 justify-between rounded-br-[150px]'>
        <div className='w-1/2 ml-16'>
            <span className='text-5xl font-semibold line-clamp-3'>
                Grow with our Email Marketing Platform & CRM suite
            </span>
            <p className='mt-4'>
                All-in-one platform to manage your customer relationships via Email, SMS, Chat and more
            </p>
            <Button btnText="Sign Up Free" btnClasses="bg-brandGreen text-white py-2 px-4 rounded-xl hover:bg-white border-2 border-brandGreen hover:text-brandGreen font-semibold w-auto mt-4" />
        </div>
        <div className='w-1/2'>
            <Image src="/productDemo.jpg" alt='product Image' width={600} height={300} />
        </div>
    </section>
    <h1 className='text-center pt-8 text-lg'>Join 500,000+ customers around the world who trust Brevo</h1>
    </>
  )
}

export default Hero