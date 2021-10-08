import React,{useEffect} from "react"
import "./App.css"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./containers/Home"
import Signin from "./containers/signin"
import Signup from "./containers/signup"
import Layout from "./components/Layout";
import PrivateRoute from './HOC/privateRoute'
import { useDispatch, useSelector } from "react-redux"
import { isUserLoggedIn } from './action'
function App() {
  const dispatch=useDispatch()
  const auth=useSelector(state=>state.auth)
  useEffect(()=>{
    if(!auth.authenticate)
     dispatch(isUserLoggedIn())
  },[])
  return (
    
      <Switch>
      
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <PrivateRoute path="/" exact  component={Home}/>  
        
      </Switch>
    
    
  );
}

export default App;
