import { createClient } from "contentful";
import {useState,useEffect} from "react";
const client=createClient({
    space:"5yig8ein1vxa",
    environment:"master",
    accessToken: import.meta.env.VITE_API_KEY
})

export const useFetch = () =>
{
  const [loading, setloading] = useState(true)
  const [projects, setprojects] = useState([])
  const getData = async() =>{
    try
    {
    const response=await client.getEntries({content_type:"projects"})
    const projects=response.items.map((item)=>
    {
      const {title,image,url}=item.fields
      const img=image.fields.file.url
      const id=item.sys.id
      return {title,img,url,id}

    })
    setprojects(projects)
    setloading(false)
    }
    catch(e)
    {
        console.log(e)
        setloading(false)
    }
  
    }

    useEffect(() => {
     getData()
    }, [])
// const temp=projects.items


  return {loading,projects}

    
}



export default useFetch;