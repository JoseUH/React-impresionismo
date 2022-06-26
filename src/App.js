import "./App.css";

import Navigator from "./components/Navigator/Navigator";
import Home from "./pages/Home/Home";
import Pintores from "./pages/Pintores/Pintores";
import Cuadros from "./pages/Cuadros/Cuadros";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CuadrosDetail from "./pages/Cuadros/CuadrosDetail/CuadrosDetail";
import AddCuadro from "./components/AddCuadro/Addcuadro";

import { useState } from "react";
import { JwtContext } from "./context/jwtContext";
import { RequireAuth } from "./components/RequireAuth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SWContextProvider } from "./context/context";

function App() {
  const [jwt, setJwt] = useState(null);
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <SWContextProvider>
        <Router>
          <div className='App'>
            <Navigator />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pintores' element={<Pintores />} />
              <Route path='/cuadros' element={<Cuadros />} />
              <Route path='/cuadros/:id' element={<CuadrosDetail />} />
              <Route path='/login' element={<Login />} />
              <Route path='/add' element={<AddCuadro/>} />

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
      </SWContextProvider>
    </JwtContext.Provider>
  );
}

export default App;
