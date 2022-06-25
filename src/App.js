import "./App.css";

import Navigator from "./components/Navigator/Navigator";
import Home from "./pages/Home/Home";
import Pintores from "./pages/Pintores/Pintores";
import Cuadros from "./pages/Cuadros/Cuadros";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { useState } from "react";
import { JwtContext } from "./context/jwtContext";
import { RequireAuth } from "./components/RequireAuth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  const [jwt, setJwt] = useState(null);
  return (
    

    <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div className='App'>
          <Navigator />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pintores' element={<Pintores />} />
            <Route path='/cuadros' element={<Cuadros />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/register'
              element={
                <RequireAuth>
                  <Register />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </Router>
    </JwtContext.Provider>
  );
}

export default App;
