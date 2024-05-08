import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className=' p-5 sm:p-24'>
      
      <div className='w-full sm:flex items-center justify-between'>
        <div className='w-[50vw]'><h1 className='text-5xl font-roboto font-bold mb-10'>Contact</h1>
      <ContactForm/></div>
      <div className=' sm:w-[50vw] h-[80vh] border border-white'>
        <Image className='w-full h-full object-cover' src={"/contact.png"} height={4096} width={4096} alt='' />
      </div>
      </div>
    </div>
  )
}

export default Contact