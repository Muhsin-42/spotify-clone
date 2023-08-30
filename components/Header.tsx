'use client'
import { useRouter } from 'next/navigation';
import React,{FC} from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
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
                            onClick={handleClick}
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
                            onClick={handleClick}
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
            </div>
        </div>
    )
}

export default Header