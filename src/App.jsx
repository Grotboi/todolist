import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const bd = "https://api.npoint.io/0b62343eaf6f9993f4e2"

  const [state, setState] = useState([])

  useEffect(() => {

  }, [])

  return (
    <>
     <div>
      <input type="text" />
     </div>
    </>
  )
}

export default App