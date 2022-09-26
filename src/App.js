import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/checkout' element={<Header />} />
        </Routes> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
