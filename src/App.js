import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from './components/List';

const App = () => {
  const [cardsData, setCardsData] = useState([
          { name: 'Rick Sanchez', origin: 'Origin: Earth (c-137)', image:'images/1.jpeg'},
          { name: 'Morty Smith', origin: 'Origin: Earth (c-137)',image:'images/2.jpeg '},
          { name: 'Summer Smith', origin: 'Origin: Earth (Replacement Dimension)' ,image:'images/3.jpeg '},
          { name: 'Beth Smith', origin: 'Origin: Earth (Replacement Dimension)',image:'images/4.jpeg ' },
          { name: 'Jerry Smith', origin: 'Origin: Earth (Replacement Dimension)',image:'images/5.jpeg ' },
          { name: 'Abadango Cluster Princess', origin: 'Origin:abadango' ,image:'images/6.jpeg '},
          { name: 'Abradolf Lincler', origin: 'Origin: Earth (Replacement Dimension)',image:'images/7.jpeg ' },
          { name: 'Adjudicator Rick', origin: 'Origin:unknown',image:'images/8.jpeg ' },
    
  ]);

  return (
    <div className="">
      <nav className='navbar sticky-top navbar-light
          bg-dark'>
        <h1 className='navbar-brand text-light'>
            Rick and Morty</h1>
       </nav>
      <h2> Characters  </h2>
      <List data={cardsData} />
      <Card/>
    </div>
  );
};

export default App;



