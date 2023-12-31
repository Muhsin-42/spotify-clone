'use client'
import { useRouter } from 'next/navigation';
import React,{FC} from 'react'
import { twMerge } from 'tailwind-merge'
import {HiHome} from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { BiSearch } from 'react-icons/bi'
import Button from './Button';
interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}
const Header:FC<HeaderProps> = ({children,className}) => {

    const router = useRouter();
    const handleLayout = () => {
        // handle layout in the future
    }

    const handleClick = () =>{
        // handle back click
    }

    return (
        <div 
            className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`,className)}
        >
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="
                    hidden
                    md:flex
                    gap-x-2  
                    items-center">
                        <button type='button'
                            onClick={()=>router.back()}
                            className='rounded-full
                             bg-black 
                             flex 
                             items-center 
                             justify-center 
                             hover:opacity-75 transition' 
                            >{''}
                        <RxCaretLeft size={35} className="text-white" />
                        </button>
                        <button type='button'
                            onClick={()=>router.forward()}
                            className='rounded-full 
                             bg-black 
                             flex 
                             items-center 
                             justify-center 
                             hover:opacity-75 transition' 
                            >{''}
                        <RxCaretRight size={35} className="text-white" />
                        </button>
                </div>

            {/* Mobile View Home & Search Btn Start */}
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button 
                        type='button'
                        onClick={()=>router.push('/')}
                        className="
                        rounded-full
                        p-2
                        bg-white
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition"  >
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button type='button' className="
                        rounded-full
                        p-2
                        bg-white
                        flex
                        items-center
                        justify-center
                        hover:opacity-75
                        transition" >
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
            {/* Mobile View Home & Search Btn End */}

            <div 
                className='flex justify-between items-center gap-x-4'
            >
                <>
                    <div>
                        <Button className='
                        bg-transparent text-neutral-300 font-medium
                        '>
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button 
                            onClick={()=> { }}
                            className='bg-white px-6 py-2'
                            >
                            Login
                        </Button>
                    </div>
                </>
            </div>
            </div>
            {children}
        </div>
    )
}

export default Header