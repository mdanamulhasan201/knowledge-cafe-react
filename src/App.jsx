import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


const [watchTime, setWatchTime] = useState(0);

  const handleWatchTime= (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
    if(previousWatchTime){
        const sum = previousWatchTime + time
        localStorage.setItem("watchTime", sum)
        setWatchTime(sum)
    }
    else{
        localStorage.setItem("watchTime", time)
        setWatchTime(time)
    }

   
  }
  const [count, setCount] = useState(0)

  return (

    <div className="App">
     
        <Header></Header>
        <Home 
        handleWatchTime={handleWatchTime}
        watchTime={watchTime}
        ></Home>
      
    
 <ToastContainer></ToastContainer>
</div>
  )
}

export default App
