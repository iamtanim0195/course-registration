import PropTypes from 'prop-types'; 


const Course = ({course}) => {
  
    const {courseName, image, credit, price, courseDetails } = course
  
    return (
    <div>
        <img src={image} alt={`cover picture of the title ${courseName}`} />
        <h1>{courseName}</h1>
        <p>{courseDetails}</p>
        <div className='flex gap-3'>
            <p>Price:{price}</p>
            <p>Credit: {credit}hr</p>
        </div>
    </div>
  )
}


Course.PropTypes = {
    course: PropTypes.object.isRequired
}
export default Course