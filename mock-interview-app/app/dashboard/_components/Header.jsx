"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';



function Header() {

    const path=usePathname();
    useEffect(() => {
      console.log(path)
    }, [])
    

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm' >
            <Image src={'/logo.svg'} width={60} height={30} alt='logo' />
            <ul className='hidden md:flex gap-6'>  
                <li className={`hover:text-[#800080] hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard' && 'text-[#800080] font-bold'}`}>Dashboard</li>
                <li className={`hover:text-[#800080] hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard/questions' && 'text-[#800080] font-bold'}`}>Questions</li>
                <li className={`hover:text-[#800080] hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard/upgrade' && 'text-[#800080] font-bold'}`}>Upgrade</li>
                <li className={`hover:text-[#800080] hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard/how' && 'text-[#800080] font-bold'}`}>How it works</li>
            </ul>
            <UserButton />
        </div>
    )
}

export default Header