import { useEffect, useState } from 'react'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);

    return (
    <h1>this is Course</h1>
  )
}

export default Courses