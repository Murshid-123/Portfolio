import React from 'react'
import { projectList } from './ProjectList'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div className='bg-slate-200 font-semibold pt-15 pb-48'>
      <div className=' container mx-auto'>
        <h1 className='text-center text-4xl py-16' style={{fontFamily : 'JetBrains Mono,Century Gothic bold'}}>My personal Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
              <ProjectItem
                key={index}
                index = {index}
                image={project.image}
                name={project.name}
              />
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects