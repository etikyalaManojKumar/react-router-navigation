import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Navbar from './component/Navbar';
 //import {mockFile} from './component/Mock'


function App() {
  return (
    <>
    <Navbar/>
    <div className="App">

      {/* {
       mockFile.map((item,i)=>{
        return(
          <Routes>
            <Route key={i} path={item.path} element={<item.name/>}/>
        </Routes>
        )
       })
      } */}
    
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
