import React from 'react'
import { SectionHeading } from './WriteUpHeading'
import { DataStructure } from '@/app/types'
import data from '../../writesup.json'
import Image from 'next/image'

export default function User({box = "Bizness"}: {box: keyof DataStructure}) {
  return (
    <section id="user"
    aria-labelledby="user-title"  className='min-h-screen lg:w-2/3 w-full mx-auto'>
        <SectionHeading number={'2'}>
            User
        </SectionHeading>
        {(data[box] as DataStructure[keyof DataStructure]).user.map((item, index) => (
        <div key={index} className='flex flex-col gap-10'>
          <h3 className='text-2xl font-bold'>{item.title}</h3>
          <p>{item.description}</p>
          <code className='bg-black text-amber-200 p-6 rounded-md shadow-xl'>{item.commands}</code>
          <Image src={item.image || ''} alt='writeups-images' width={1000} height={800}/>
        </div>
      ))}
    </section>
  )
}
