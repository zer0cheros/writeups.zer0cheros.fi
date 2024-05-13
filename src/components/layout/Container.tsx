import React from 'react'

export default function Container({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className=" mx-auto min-h-screen max-w-[1920px] px-4 sm:px-6 lg:px-8">{children}</div>
  )
}
