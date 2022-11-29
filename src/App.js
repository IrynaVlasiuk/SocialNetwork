import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/Main/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Main/Messages/Messages";
import Friends from "./components/Main/Friends/Friends";
import Videos from "./components/Main/Videos/Videos";
import Pictures from "./components/Main/Pictures/Pictures";
import Home from "./components/Main/Home/Home";
import SideBar from "./components/Main/SideBar/SideBar";

function App(props) {
  return (
     <div className="App">
        <div className="container">
           <Header/>
           <Main>
              <NavBar/>
              <Routes>
                  <Route path='/home' element={<Home store={props.state.homePage}/>}/>
                  <Route path='/messages/*' element={<Messages store={props.store}/>}/>
                  <Route path='/friends' element={<Friends/>}/>
                  <Route path='/pictures' element={<Pictures/>}/>
                  <Route path='/videos' element={<Videos/>}/>
              </Routes>
               <SideBar/>
           </Main>
           <Footer/>
        </div>
     </div>
  );
}

export default App;
