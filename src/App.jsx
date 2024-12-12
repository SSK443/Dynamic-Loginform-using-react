
import './App.css'
import Form from './components/Form'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Portal from './components/Portal'
function App() {

  return (
    <>
      
   
     <Router>
       <Routes> 
        <Route path="/" element={<Form/>}/>
        <Route path="/Portal" element={<Portal/>}/>
          </Routes>
          
     </Router>

    </>
  )
}

export default App
