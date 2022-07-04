// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import CalculateLand from './Components/CalculateLand';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddLand from './Components/AddLand';
import BuyLand from './Components/BuyLand';
// import SellLand from './Components/SellLand';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Properties from './Components/Properties';
import Login from './Components/Login';
import Regis from './Components/Regis';


// calling AuthProvider to use the user state
import {AuthProvider} from './hooks/useAuth';

// get private route to be protected from unauthenticated users
import {ProtectedRoute} from './hooks/ProtectedRoute';



// import LandState from './context/land/LandState';

function App() {
  return (
    // <LandState>

      <BrowserRouter>
  <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/calculateLand" element={<CalculateLand />} />
          <Route path="/regis" element={<Regis />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyLand" element={<BuyLand />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          
          <Route path="/addLand" element={
            <ProtectedRoute>    
                <AddLand />
            </ProtectedRoute>    
                } />
          <Route path="/properties" element={
            <ProtectedRoute>
                <Properties />
            </ProtectedRoute>
              } />
          {/* <Route path="/sellLand" element={<SellLand />} /> */}
        </Routes>

        {/* <Footer /> */}
</AuthProvider>
      </BrowserRouter>

    // </LandState>
  );
}

export default App;
