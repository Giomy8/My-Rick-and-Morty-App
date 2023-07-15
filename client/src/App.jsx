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

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


const [characters , setCharacters] = useState ([]);

const dispatch = useDispatch();
const navigate = useNavigate();
const {pathname} = useLocation();


const [access, setAccess] = useState(false);
useEffect(() => {
   !access && navigate('/');
}, [access]);

function onSearch(character) {
   axios(`http://localhost:3001/rickandmorty/character/${character}`)
   .then((response) =>{ 
   const data = response.data;
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
           <Route path="/" element={<Form setAccess={setAccess} login={login}/>} />
           <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
           <Route path="/about" element={<About />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
           </Routes>
         
      </div>
   );
}

