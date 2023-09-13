import { Route, Routes } from "react-router-dom";


import Navigation from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      
        <Navigation />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/attractions"
              element={<Attractions />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/landing"
              element={<Landing />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>

        </div>
    <Footer />
      
    </div>
  );
}

export default App;
