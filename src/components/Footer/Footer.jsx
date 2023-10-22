import React from 'react'
import { Instagram , Twitter , LinkedIn , GitHub } from '@mui/icons-material'

function Footer() {
  return (
    <footer className='bg-cyan-950'>
        <div className='container mx-auto '>
            <div className=' flex space-x-8 items-center justify-center pt-8'>
                <a href="https://www.instagram.com/mur_shi_/" target='_blank'><div className='hover:scale-105 h-8 w-8 flex justify-center items-center rounded-full bg-white'><Instagram/></div></a>
                <a href="https://twitter.com/Murshid00462140" target='_blank'><div className='hover:scale-105  h-8 w-8 flex justify-center items-center rounded-full bg-white'><Twitter/></div></a>
                <a href="https://www.linkedin.com/in/murshid-p-b807641a2" target='_blank'><div className='hover:scale-105 h-8 w-8 flex justify-center items-center rounded-full bg-white'><LinkedIn/></div></a>
                <a href="https://github.com/Murshid-123" target='_blank'><div className='hover:scale-105 h-8 w-8 flex justify-center items-center rounded-full bg-white'><GitHub/></div></a>
            </div>
            <div className='text-center pb-4'>
                <p className=' text-slate-100 mt-10'> &copy; Murshid P</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer