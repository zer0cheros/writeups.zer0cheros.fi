import React from 'react'
import { SectionHeading } from './WriteUpHeading'
import data from '../../writesup.json'
import Image from 'next/image'
import { DataStructure } from '../app/types'



export default function Recon({box = "Bizness"}: {box: keyof DataStructure}) {
  return (
    <section className='min-h-screen lg:w-2/3 w-full mx-auto' id="recon"
    aria-labelledby="recon-title">
        <SectionHeading id={box} number={'1'}>
            Recon
        </SectionHeading>
      {(data[box] as DataStructure[keyof DataStructure]).recon.map((item, index) => (
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
