
import Header from './components/Header';
import Entry from './components/Entry';
import fujiIcon from './assets/montFuji.jpg';
import christIcon from './assets/christRedempteur.jpg';

import markerIcon from './assets/marker.png';
import data from './data';

import './App.css'


function App() {
 
  const entryElements = data.map((entry) => { 
  return (
  
  <Entry 
  key={entry.id}
    img={entry.img}
    country={entry.country}
    googleMapLink={entry.googleMapsLink}
    title={entry.title}
    dates={entry.dates}
    text={entry.text}

    
    />
  )

})
  

  return (
    <>
     <Header/>
     {entryElements}
     
    
    </>
  )
}

export default App
