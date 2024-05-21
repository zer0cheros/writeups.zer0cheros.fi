'use client'
import React from 'react'
import Image from 'next/image'
import Icons from '../HTB/Icons'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Experience from '../3d/Experience';
const htb = [
  {
    title: 'Bizness', img: 'https://labs.hackthebox.com/storage/avatars/1919b64800f6676d0c0d285a9d664cee.png'
  },
  {
    title: 'Visual', img: 'https://labs.hackthebox.com/storage/avatars/a75ac8ed04e6e728547538bfa41cfc68.png'
  },
  {
    title: 'Surveillance', img: 'https://labs.hackthebox.com/storage/avatars/d2ddffcb2eced6a4d5486dc99d440d1a.png'
  },
]

export default function Hero() {
  return (
  <ScrollParallax >
    <div className='flex  w-full h-screen'>
      
    <div className='relative bg-white top-0 min-h-[100vh] left-0 w-1/3 h-full max-md:hidden'>
        <div className='absolute left-0 z-20 rounded-br-[350px] h-[90%] w-full bg-lime-600'/>
        <div className='absolute z-50 w-1/2 min-w-[1000px] max-lg:z-20 max-lg:min-w-[700px] h-full'>
          <Experience />
        </div>
        <div className='absolute top-0 left-0 z-30 w-full rounded-br-[350px] shadow-xl h-[90%] bg-gradient-to-b from-transparent to-white' >
        </div>
    </div>
        <div className= 'md:w-2/3 w-[100%]  h-full flex flex-col'>
          <div className='flex-1 pb-10 relative xl:z-20 z-40 flex h-1/3 flex-col justify-center items-center bg-slate-300 shadow-lg rounded-br-[150px] '>
            <Image src={"/htb.webp"} className='invert-[0.26]' width={120} height={120} alt={'htb logo'} />
            <h1 className="text-3xl text-center  w-1/2 font-bold text-white sm:text-6xl">
              WriteUps <br /><span className=' text-lime-600'>Hack</span> The Box
            </h1>
            <div className='absolute top-0 right-16 max-md:left-0'>
              <p className='mt-5 text-xl flex text-slate-50 md:block max-md:flex-col max-md:justify-start p-2 justify-end'>Author: <span className=' text-lime-600'>Zer0cheros</span> </p>
            </div>
          </div>
          <div className='h-4/6 bg-white mt-10 w-1/2 mx-auto gap-10 max-lg:text-center text-right  flex flex-col items-center justify-center'>
          <div className='relative z-40 max-xl:bg-slate-100 max-xl:rounded-lg p-5 bg-transparent'>
            <h1 className="text-5xl font-bold text-slate-900 sm:text-6xl">
            Latest writeups
          </h1>
          
            <Icons htb={htb} />
            </div>
          </div>
        </div>
    </div>
    </ScrollParallax>
  )
}
