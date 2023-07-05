import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

export default function App() {
const [characters , setCharacters] = useState ([]);
const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}

const navigate = useNavigate();
const {pathname} = useLocation();

console.log("aqui",location)
const [access, setAccess] = useState(false);
useEffect(() => {
   !access && navigate('/');
}, [access]);

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {console.log("aqui",data)
      if (data.name) {
         setCharacters([...characters, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      });
  }
const onClose = (id) => {
   //const eliminarcard = event.target.value
   //console.log(id)
   let cardsfiltradas = characters.filter((character) =>    character.id !== Number(id))
   //console.log('nuevo',eliminarcard)
   setCharacters([...cardsfiltradas])
}
   return (
      <div className = "App">
        {pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>} 
         <Routes>
           <Route path="/" element={<Form setAccess={setAccess} />} />
           <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
           <Route path="/about" element={<About />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/favorites" element={<Favorites/>}/>
           </Routes>
         
      </div>
   );
}

