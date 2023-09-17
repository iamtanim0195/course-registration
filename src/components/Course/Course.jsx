import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';

const Course = ({course, handelAddToCrat}) => {

    const {
        courseName,
        image,
        credit,
        price,
        courseDetails
    } = course

    return(
        <div className='w-80 h-86 bg-white p-3 '>
            <img src={image}
                alt={
                    `cover picture of the title ${courseName}`
                }/>
            <h1 className='text-lg font-semibold'>
                {courseName}</h1>
            <p>{courseDetails}</p>
            <div className='flex gap-3 p-3'>
                <p className='font-medium text-xl'>$ Price:{price}</p>
                <BsBook></BsBook> 
                <p className='font-medium text-xl'>Credit: {credit}hr</p>
            </div>
            <button onClick={()=>handelAddToCrat(course)} className='btn btn-primary w-full'>Select</button>
        </div>
    )
}

Course.PropTypes = {
    course: PropTypes.object.isRequired,
    handelAddToCrat: PropTypes.func
}
export default Course
