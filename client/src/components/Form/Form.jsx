import React from 'react';
import styles from './Form.module.css';
import Validate from '../Validation/Validation';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const EMAIL = 'giomarmesa@gmail.com';
const PASSWORD = '123456';


export default function Form({setAccess, login}) {
  const [userData, setUserData] = useState({
    email: EMAIL,
    password: PASSWORD,
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  
  let emailpassword = ""
    const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Validate(userData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
        login(userData)
       }
  };

  return (
    <div className={styles.contenedorcolumnas}>

    <div className={styles.columnas}>
      <div className={styles.columna1}></div>

      <div className={styles.columna2}></div>

      <div className={styles.contenedorcolumna3}>
        
      <div className={styles.columna3}>

      <button className={styles.botonuser}>USER</button>

      <form onSubmit={handleSubmit}>

      <input className={styles.email}
      placeholder='E-MAIL *'
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
    
      <input className={styles.password}
      placeholder='PASSWORD *'
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
     
     <p className={styles.error}>
     {errors.email && errors.email}
     {errors.password && errors.password}
     {errors.emailpassword !="" && errors.emailpassword}

    </p>     
    <button type="submit" className={styles.botonsignup}>SIGN UP</button>
    </form>
    </div>
    </div>
    </div>
    </div>
);
}
