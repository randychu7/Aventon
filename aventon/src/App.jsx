import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import './App.css'
function App() {

  return (
    
    <div>
  
        <Navbar/>

        <div className='w-full  h-screen  mt-[10em]'>

          <Hero/>


        </div>

        <div>
          <Features/>
        </div>
        <section className='bg-green-500'></section>
        <section className='bg-slate-500'></section>
        <section className='bg-gray-200'></section>

    </div>
    
  )
}

export default App
