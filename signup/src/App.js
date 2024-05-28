import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element ={<Login/>} path={'/login'}/>
            <Route element ={<Signup/>} path={'/signup'}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;