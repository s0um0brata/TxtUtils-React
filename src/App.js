// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode is enabled","success")
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success")
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> 
      <div className="container my-3">
      <Switch>
      <Route exact path="/">
          <TextForm heading='Enter text to Analyze' mode={mode} showAlert={showAlert}/>
          </Route>
     </Switch>
       </div>
        </Router>
      
      
    </>
  );
}

export default App;
