import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Sheet } from './ui/sheet';

function Header() {
  return (
    <nav className="bg-[#044E83]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_2fr_1fr] justify-center items-center">
        {/* Logo */}
        <div className="flex top-0 md:top-0 justify-center md:justify-start">
          <Image 
            src={"/images/logo.png"}
            alt="Logo"
            width={90}
            height={90}
          />
        </div>

        {/* Title */}
        <div className="flex justify-center items-center">
          <p className="text-gray-30 font-bold text-xl md:text-2xl text-center text-[#B9D8F3]">
            Tuition Free Education Program on Latest Technologies
          </p>
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex gap-6 justify-end items-center text-[#EBF9F6]">
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
            <Link href={"/result"}>Result</Link>
          </li>
          <li className="flex items-center gap-1">
            <Link href={"/courses"}>Courses</Link>
            <IoIosArrowDown />
          </li>
        </ul>
        <Sheet>
            <SheetTrigger className='lg:hidden'>
                <Menu/>
            </SheetTrigger>
            <SheetContent>
                <ul className="flex flex-col gap-6 justify-end items-center text-black">
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
                    <Link href={"/result"}>Result</Link>
                </li>
                <li className="flex items-center gap-1">
                    <Link href={"/courses"}>Courses</Link>
                    <IoIosArrowDown />
                </li>
                </ul>
            </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Header;
