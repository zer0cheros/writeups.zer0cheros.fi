import React from 'react'

export default function WriteUpSection({children}: {children: React.ReactNode}) {
  return (
    <section  className='min-h-screen mx-auto w-full font-mono text-lg font-medium xl:max-w-7xl p-5 flex flex-col bg-white antialiased'>
     {children}
    </section>
  )
}
