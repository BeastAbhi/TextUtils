
import { useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  } 
  const removeBodeyClasses = () => {
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) => {
    removeBodeyClasses()
    if(cls !== null)
    {
      document.body.classList.add('bg-'+cls)
    }
    else if(cls === null && Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else if(cls === null && Mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled","success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About mode={Mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character counter"  mode={Mode} showAlert={showAlert} />}>
              </Route>
          </Routes> */}
          {/* <About mode={Mode}/> */}
          <TextForm heading="TextUtils - Word Counter, Character counter"  mode={Mode} showAlert={showAlert} />

    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
