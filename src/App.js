
import "./App.css"
import Header from './Components/header'
import Main from './Components/main'
import Footer from './Components/footer'
import {useState} from 'react'

function App() {
  const [thin, setThin] = useState(window.innerWidth)
  return (
    <div className = "all">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
