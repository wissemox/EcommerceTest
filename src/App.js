import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from './Compent/HomePage/Navbar/Navbar'
import MainPage from './Compent/HomePage/MainPage/MainPage'
// scss 
import './Css/heaight/heaight.scss'
import './Css/widht/widht.scss'
import './Css/fontFamilty/fontFamilty.scss'
import './Css/Reposive/Navbar.scss'
import './Css/Animation/Menu.scss'
import './Css/background/background.scss'
function App() {
  return (
    <div className="App">
       <Navbar/>
       <MainPage/>
       <p>wissem</p>
    </div>
  );
}

export default App;
