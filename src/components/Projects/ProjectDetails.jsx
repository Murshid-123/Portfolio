import React from 'react'
import { useParams } from 'react-router-dom';
import { projectList } from './ProjectList';
import { Link } from 'react-router-dom';

function ProjectDetails() {

    let { id } = useParams();
    const project = projectList[id]

    return (
        <div>
            <button className="text-white bg-slate-600 w-32 rounded-2xl p-3 mt-2 mr-2 block ml-auto text-lg">
                <Link to="/Projects" className="hover:scale-105 hover:text-red-500">
                    Back
                </Link>
            </button>
            <div className="max-w-md mx-auto p-4 text-center">
                <h1 className="text-3xl font-semibold mb-4">{project.name}</h1>
                <img className="w-full h-auto" src={project.image} alt={project.name} />
                <div className="text-gray-700 text-lg mt-4">
                    {project.remarks}
                </div>
            </div>
        </div>
             
             
             
    )
}

export default ProjectDetails