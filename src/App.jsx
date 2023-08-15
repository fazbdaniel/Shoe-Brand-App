import React, { lazy, Suspense } from 'react';
import "./App.css";
import {HeroSection, Navigation, Products, About, Contacts} from "./components";

import '@fortawesome/fontawesome-free/css/all.min.css';

const LocationLazy = lazy(() => import('./components/Location'));

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Products/>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationLazy />
      </Suspense>
      <About/>
      <Contacts/>
    </div>
  );
};

export default App;
