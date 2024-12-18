import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <nav className='grid grid-cols-3 bg-sky-800'>
        {/*Logo*/}
        <div className='grid grid-span-3 justify-center'>
            <Image 
            src={"/images/logo.png"}
            alt='Logo'
            width={80}
            height={80}
            />
        </div>
        <div className='flex grid-span-6 justify-left text-2xl items-center'>
            <p className='text-gray-300 p1'>Tuition Free Education Program on Latest Technologies</p>
        </div>
        <ul className='flex gap-10 grid-span-3 justify-center items-center'>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/apply"}>Apply</Link>
            </li>
            <li>
                <Link href={"/jobs"}>Jobs</Link>
            </li>
            <li>
                <Link href={"result"}>Result</Link>
            </li>
            <li>
                <Link href={"/courses"}>Courses</Link>
            </li>   
        </ul>
    </nav>
  )
}

export default Header
