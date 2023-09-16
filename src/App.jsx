
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {


  return (
    <>
      <h1 className='text-3xl font-bold'>Course Registration</h1>
      <div className='md:flex'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
      
    </>
  )
}

export default App
