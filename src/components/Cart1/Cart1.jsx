import PropTypes from 'prop-types';

const Cart1 = ({cart1}) => {
    const {courseName, credit} = cart1;
    return (
        <div className='bg-white'>
            
                <li>{courseName}</li>
            
        </div>
    )
} 

Cart1.PropTypes = {
    cart1: PropTypes.object
}
export default Cart1
