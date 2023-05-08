import React from 'react'
import { useFetch } from './fetchProject';
import birth from './assets/birthday.png';
const url="./assets"
export const Projects = () => {
    const {loading, projects}=useFetch();
    // const [projects,setprojects]=useFetch();
    // console.log(projects)
  return (
    <section className='projects'>
      <div className='title'>
    <h2>Projects</h2>
    <div className='title-underline'></div>
    </div>
    <div className='projects-center'>
    {projects.map((data)=> {
        const img=`${url}/${data.image}`
       return   <a key={data.id} href={data.url} rel='noreferrer' target='_blank' className='project'><img src={data.img} alt={data.title} className='img'/>
         <h5>{data.title}</h5></a>
        
          
    })}
    </div>
    </section>

  )
}
export default Projects;    