
import './App.css';
import React from "react";
import FullName from './Component/Profile/FullName';
import Photo from './Component/Profile/ProfilePhoto';
import Biography from './Component/Biography';
import Adress from './Component/Profile/Adress';
import GoneGirls from './Component/BestMovies/GoneGirl';
import PrideAndPrejudice from './Component/BestMovies/PrideAndPrejudice';
import CareALot from './Component/BestMovies/CareALot';
import AnEducation from './Component/BestMovies/AnEducation';
import HOC from './Component/test';
function App (){
  return(
    <div>
      <nav className='Nav'>
         <FullName/>
      </nav>
      <main>
        <div className='photo'>
        <Photo/>
        <Biography/>
        <ul type='disc'>
          <li>Birthday:	January 27, 1979</li>
          <li><Adress/></li>
          <li>Star Sign:	AquariusWomen</li>
          <li>Famous quote: I know I’ve got loads that has never been tapped.</li>
          <li>Height:	5′ 8½” (1.74 m)</li>
        </ul>
        </div>
        <footer>
          <h1 id="h1"> Best mOvies</h1>
          <section className='Movie'>
            <AnEducation/>
            <PrideAndPrejudice/>
            <CareALot/>
            <GoneGirls/>
          </section>
        </footer>
      </main>
    </div>

  );
};
export default App;
