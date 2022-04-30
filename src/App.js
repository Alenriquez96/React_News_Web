import './styles/styles.scss';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer";
import { userContext } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user,setUser] = useState("");

  const login = (name) =>{
    setUser(name)
  }

  const data = {
    user,
    login 
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;
