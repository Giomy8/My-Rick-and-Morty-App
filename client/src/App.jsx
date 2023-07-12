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
import HeaderIndex from './components/HeaderIndex/HeaderIndex'
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions/actions';



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
const dispatch = useDispatch();
const navigate = useNavigate();
const {pathname} = useLocation();


const [access, setAccess] = useState(false);
useEffect(() => {
   !access && navigate('/');
}, [access]);

function onSearch(character) {
   axios(`http://localhost:3001/rickandmorty/character/${character}`)
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      if (data.id) {
         setCharacters((oldChars) =>[...oldChars, data]);
      } else {
         alert('There are no characters with this ID!');
      }
   })
   .catch(err => console.error(err))
}

const onClose = (id) => {
      let cardsfiltradas = characters.filter((character) =>    character.id !== Number(id))
      setCharacters([...cardsfiltradas])
      dispatch(removeFav(id))
}
   return (
      <div className = "App">
        {pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
        {pathname === '/' && <HeaderIndex />} 
         <Routes>
           <Route path="/" element={<Form setAccess={setAccess} />} />
           <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
           <Route path="/about" element={<About />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
           </Routes>
         
      </div>
   );
}

