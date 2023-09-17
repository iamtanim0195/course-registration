import {useEffect, useState} from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handelAddToCrat}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("./data.json").then((res) => res.json()).then((data) => setCourses(data));
    }, []);

    return (
        <div className="md:w-4/5 grid grid-cols-3 gap-3">
            {
            courses.map(course => 
                <Course 
                    key={course.id}
                    course={course}
                    handelAddToCrat={handelAddToCrat}
                    ></Course>
            )
        } </div>
    );
};
Courses.PropTypes = {
    handelAddToCrat: PropTypes.func
}
export default Courses;
