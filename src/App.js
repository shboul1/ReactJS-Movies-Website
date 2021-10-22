import "./App.scss"
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './config/Routes'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer/>
    </Router>
  );
}

export default App;
