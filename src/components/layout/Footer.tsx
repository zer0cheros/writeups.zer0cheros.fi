import React from 'react'

export default function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} Zer0cheros</p>
        <p>All rights reserved.</p>
        <a href="https://zer0cheros.fi">www.zer0cheros.fi</a>
      </div>
    </footer>
  )
}
