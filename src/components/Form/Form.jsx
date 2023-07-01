import React from 'react';
import styles from './Form.module.css';
import Validate from '../Validation/Validation';
import {useNavigate} from 'react-router-dom';


// eslint-disable-next-line
export default function Form({setAccess}) {
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const EMAIL = 'giomarmesa@gmail.com';
 
  const PASSWORD = 'Gio1802';

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Validate(userData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
         }else{
            alert ("El usuario o la contraseña no son válidos")
         }
        }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
    {errors.email && <p className={styles.error}>{errors.email}</p>}

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
     {errors.password && <p className={styles.error}>{errors.password}</p>}

    <button type="submit">Submit</button>
    </form>
);
}
