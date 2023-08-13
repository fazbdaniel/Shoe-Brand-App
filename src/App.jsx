import "./App.css";
import {HeroSection, Navigation, Products} from "./components";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Products/>
    </div>
  );
};

export default App;
