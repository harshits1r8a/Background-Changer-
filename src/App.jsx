
import { useState } from 'react'
import './App.css'
import Btn from './components/btn'

function App() {
  const [color , setColor] = useState("black")
  return (
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        
        <div className='bg-slate-500 p-3 mx-20 rounded-md flex flex-wrap justify-center  fixed bottom-0 inset-x-0 mb-10 gap-2'>
          <Btn bgcolor='red' text="Red" bodyColor={setColor}/>
          <Btn bgcolor='green' text="Green" bodyColor={setColor}/>
          <Btn bgcolor='Pink' text="Pink" bodyColor={setColor}/>
          <Btn bgcolor='Gray' text="Gray" bodyColor={setColor}/>
          <Btn bgcolor='Cyan' text="Cyan" bodyColor={setColor}/>
          <Btn bgcolor='Orange' text="Orange" bodyColor={setColor}/>
          <Btn bgcolor='purple' text="purple" bodyColor={setColor}/>
          <Btn bgcolor='Yellow' text="Yellow" bodyColor={setColor}/>
          <Btn bgcolor='LightGreen' text="LightGreen" bodyColor={setColor}/>
        </div>
      </div>
  )
}

export default App
