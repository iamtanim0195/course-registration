import {useState} from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify'; // Import 'toast' from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [cart, setCart] = useState([]);
    // const [credit, setCredit] = useState(0);

    const handelAddToCrat = course => {
        const isExist = cart.find(item => item.id == course.id);

        if (isExist) {

            toast.success('This course is already exists!', {
                position: 'top-right',
                autoClose: 3000, // Time in milliseconds to automatically close the notification
                hideProgressBar: false
            });

        } else {
            const newCart = [
                ...cart,
                course
            ];
            setCart(newCart);
        }
    }

    return (
        <>
            <h1 className='text-3xl font-bold text-center'>Course Registration</h1>
            <div className='md:flex'>
                <Courses handelAddToCrat={handelAddToCrat}></Courses>
                <Cart cart={cart}></Cart>
                <ToastContainer/>
            </div>

        </>
    )
}

export default App
