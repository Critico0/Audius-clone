import Sidebar from './Pages/Sidebar'
import Homebar from './Pages/Homebar'
import Navbar from './Pages/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
        <div className='main'>
          <Sidebar/>
          <Homebar/>
        </div>
    </>
  )
}

export default App
