import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';

import Clients from './Components/Clients/Clients';
import Images from './Components/Images/Images';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
    
      
      <NavBar />
      <Banner />
      <Services />
      <Clients />
      <Images />
      <Footer /> 
    </div>
  );
}

export default App;
