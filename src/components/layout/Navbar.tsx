'use client'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

const sections = [
    {id: 'recon',  title: 'Recon',},
    { id: 'user', title: 'User' },
    { id: 'root', title: 'Root' },
    { id: 'summary', title: 'Summary' },
  ]

export default function Navbar() {
    const navBarRef = useRef<React.ElementRef<'div'>>(null)
    let [activeIndex, setActiveIndex] = useState<number | null>(0)
    useEffect(() => {
        function updateActiveIndex() {
          if (!navBarRef.current) {
            return
          }
    
          let newActiveIndex = 0
          let elements = sections
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)
          let bodyRect = document.body.getBoundingClientRect()
          let offset = bodyRect.top + navBarRef.current.offsetHeight + 1
          console.log('elements', elements)
            console.log('offset', offset)
            console.log('bodyRect', window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight)
          // if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
          //   setActiveIndex(sections.length - 1)
          //   return
          // }
    
          for (let index = 0; index < elements.length; index++) {
            if (
              window.scrollY >=
              elements[index].getBoundingClientRect().top - offset
            ) {
              newActiveIndex = index
            } else {
              break
            }
          }
          console.log('newActiveIndex', newActiveIndex)
          setActiveIndex(newActiveIndex)
        }
    
        updateActiveIndex()
    
        window.addEventListener('resize', updateActiveIndex)
        window.addEventListener('scroll', updateActiveIndex, { passive: true })
    
        return () => {
          window.removeEventListener('resize', updateActiveIndex)
          window.removeEventListener('scroll', updateActiveIndex)
        }
      }, [])
  return (
    <div ref={navBarRef} className="sticky top-2 z-50">
        <div className="hidden sm:flex sm:h-32 sm:justify-center sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/70 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]"
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 rounded-full before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  sectionIndex === activeIndex
                    ? 'border-lime-600 bg-lime-600 text-slate-50 text-4xl transition-all before:text-slate-50 '
                    : 'border-transparent before:text-slate-900 hover:bg-lime-50/40 hover:before:text-slate-900',
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
