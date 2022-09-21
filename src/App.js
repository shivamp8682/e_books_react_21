
import './App.css';
import Home from './Home';
import Profile from './Features';
import Property from './Pricing';
import Footer from './Footer';
import Header from './Header';
import  ReactDOM  from 'react-dom';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
   
<BrowserRouter>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/Profile" element={<Profile/>}/>
<Route path="/Property" element={<Property/>}/>
</Routes>
<Footer/>
</BrowserRouter>
      
     
    </div>
  )
}

export default App;
