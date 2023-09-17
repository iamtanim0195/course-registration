import PropTypes from 'prop-types'
import Cart1 from '../Cart1/Cart1'

const Cart = ({cart}) => {
  return (
    <div className="md:w-3/12 h-fit ml-12 bg-white">
        <div className="mx-auto p-3 ">
          <h1 className='text-xl text-sky-700 mt-5'>Credit Hour Remaining 7 hr</h1>
          <hr className="border-t border-gray-400 my-4" />

          <h1 className='text-2xl font-bold'>Course Name</h1>
          {
            cart.map(cart1 => <Cart1 
              key={cart1.id}
              cart1={cart1}
              ></Cart1>)
          }
          <hr className="border-t border-gray-400 my-4" />
          <h1>Total Credit Hour : 13</h1>
        </div>
    </div>
  )
}
Cart.PropTypes = {
  cart: PropTypes.array
}
export default Cart