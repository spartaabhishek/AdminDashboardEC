import "./App.css"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./containers/Home"
import Signin from "./containers/signin"
import Signup from "./containers/signup"
import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>  
        <Route path="/" exact  component={Home}/>
      </Switch>
    </Router>
    
  );
}

export default App;
