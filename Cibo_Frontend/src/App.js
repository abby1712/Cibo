import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Header1 from './components/header1';
import Header2 from './components/header2';
import Description from './components/description';
import Foodvar from './components/foodvar';
import Footer from './components/Footer';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import AllRestaurants from './components/allrestauarnts';
import SingleResto from './components/SinglleResto';
import Cart from './components/cart';
//import ShoppingCartProvider from './components/shoppingCart';
import ReactDOM from 'react-dom'
import React from "react";
import {jsx as _jsx} from 'react/jsx-runtime';
//import useShoppingCart from './components/shoppingCart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App({foodItems, cartItems}) {
  return (
      <Router>
        <useShoppingCart>
        <div style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
            <Switch>
                <Route exact path="/SignIn"> 
                    <Header1/>
                    <SignIn/>
                </Route>
                <Route exact path="/SignUp"> 
                    <Header2/>
                    <SignUp/>
                </Route>
                <Route exact path="/AllRestaurants"> 
                    <Header/>
                    <AllRestaurants/>
                </Route>
                <Route exact path="/restaurant/:title"> 
                    <Header/>
                    <SingleResto/>
                </Route> 
                <Route exact path="/Cart"> 
                    <Header/>
                    <Cart cartItems={cartItems}/>
                </Route> 
                <Route exact path="/">
                    <Header/>
                    <Description/>
                    <Foodvar/>
                </Route>
            </Switch>
          <Footer/>
        </div>
        </useShoppingCart>
      </Router>
  );
}

export default App;
