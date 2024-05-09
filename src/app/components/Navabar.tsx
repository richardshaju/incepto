import Link from 'next/link'
import React from 'react'

function Navabar() {
  return (
    <div className='w-full h-10 flex justify-between px-6 py-4'>
        <div>
            Logo
        </div>
        <div className='flex gap-6'>
            <Link href='/'>Contributors</Link>
            <Link href='/'>Donate</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Logout</Link>
        </div>
    </div>
  )
}

export default Navabar