import React from 'react'
import { Search} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='p-5 shadow-sm bg-white border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
            <Search/>
            <input type='text' placeholder='search...' className='outline-none'/>
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 mt-2'>
            🔥join membership in just for 39.99$/Month</h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header