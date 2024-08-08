import React from 'react'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';


function Header() {
    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm' >
            <Image src={'/logo.svg'} width={60} height={30} alt='logo' />
            <ul className='flex gap-6'>
                <li className='hover:text-[#800080] hover:font-bold transition-all cursor-pointer'>Dashboard</li>
                <li className='hover:text-[#800080] hover:font-bold transition-all cursor-pointer'>Questions</li>
                <li className='hover:text-[#800080] hover:font-bold transition-all cursor-pointer'>Upgrade</li>
                <li className='hover:text-[#800080] hover:font-bold transition-all cursor-pointer'>How it works</li>
            </ul>
            <UserButton />
        </div>
    )
}

export default Header