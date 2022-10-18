import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders'
import { auth } from "./firebase"
import PrivateRouter from './PrivateRouter';
import { useStateValue } from "./StateProvider";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Footer from './Footer'
import ScrollToTop from "./ScrollToTop";

const api_key =
  'pk_test_51LmwnNI1KVD2wTUASNFzyqTPtu5yHtAhahWiAFvZ1xJYBX3QicvRKZD60P2j6L3PSxdc2ivOGlwIHFfYXoN73iBm00DXHhiSuJ'

const stripePromise = loadStripe(api_key)

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
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/checkout' element={<Header />} />
          <Route exact path='/payment' element={<Header />} />
          <Route exact path='/orders' element={<Header />} />
        </Routes> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} /> 
          <Route path='/orders' element={<Orders />} /> 
          <Route path="/payment" 
            element={(
              <Elements stripe={stripePromise} >
                <Payment />
              </Elements>
            )}
          />
        </Routes>
        <Routes>
          <Route exact path='/' element={<Footer />} />
          <Route exact path='/checkout' element={<Footer />} />
          <Route exact path='/payment' element={<Footer />} />
          <Route exact path='/orders' element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );    
}

export default App;
