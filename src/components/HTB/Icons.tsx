'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type HTB = {
    img: string;
    title: string;
    
}

export default function Icons({htb}:{htb:HTB[]} ) {
  const router = useRouter()
  const handleHTB = (id:string) => {
    router.push(`?box=${id}`)
  }
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(()=> {
    const url = new URL(window.location.href)
    const box = url.searchParams.get('box')
    if(box) {
      scrollToSection(box)
    }
    
  },)
  return (
    <div className='flex w-full gap-5 justify-end items-center'>
        {htb.map((htb, index) => (
        <div onClick={handleHTB.bind(null, htb.title)} key={index} className='flex cursor-pointer min-h-24 min-w-24 flex-col gap-2 p-5 items-center justify-center'>
          <Image src={htb.img} width={100} height={100} alt={htb.title} />
          <p>{htb.title}</p>
        </div>
        ))}
    </div>
    
  )
}
