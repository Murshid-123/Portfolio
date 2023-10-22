import React from 'react'
import { useNavigate } from 'react-router-dom' 

function ProjectItem({image,name,index}) {
  const navigate = useNavigate();
  return (

    <div  onClick={() => { navigate('/Projects/' + index)}} >
      <div className="bg-slate-100 hover:shadow-4xl hover:scale-105 max-w-md rounded-xl overflow-hidden shadow-lg flex items-center justify-center mx-auto flex-col w-72 h-80 hover:cursor-pointer">
        <img className="object-contain h-64 w-60 " src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem