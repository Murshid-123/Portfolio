import React from 'react'
import { skills } from './Skills';


function Home() {

  

  const resumeUrl = 'https://drive.google.com/file/d/17P358Vj9BNEgOsbxcdFbsfyptpJC6Tu9/view?usp=sharing'; 
  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  };


  return (
    <div>
      <div className='bg-cyan-900'>
        <div className='container mx-auto '>
          <div className='text-center py-36'>
            <p className=' text-6xl font-medium  text-lime-400' style={{fontFamily : 'JetBrains Mono,Century Gothic bold'}}>
              Hi , My   Name Is   Murshid P
            </p>
            <p className='text-3xl text-white py-4' style={{fontFamily : 'JetBrains Mono,Century Gothic bold'}}>
              I'm a software developer
            </p>
            <button className="bg-cyan-950 text-white font-semibold py-2 px-4 rounded my-10 hover:bg-cyan-800 hover:shadow-md transform hover:scale-105 transition duration-300" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <div className='container mx-auto'> 
        <h1 className='text-center my-7 text-4xl text-cyan-900 font-medium p-5 border-b-2' style={{fontFamily : 'JetBrains Mono,Century Gothic bold'}}>SKILLS AND INTERESTS</h1>
        <div className="bg-gray-100 p-4 my-20 " style={{fontFamily : 'JetBrains Mono,Century Gothic bold'}}>
            <div className="max-w-screen-xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300 "
                    >
                      <div className="text-4xl mb-2 ">{skill.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{skill.label}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home