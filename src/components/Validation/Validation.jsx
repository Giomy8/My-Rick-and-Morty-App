function validateEmail(email) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regexEmail.test(email);
  }
  
  function Validate(data) {
    const errors = {};
  
    if (!data.email) {
      errors.email = 'El nombre de usuario es obligatorio';
    } else if (!validateEmail(data.email)) {
      errors.email = 'El nombre de usuario debe ser un email válido';
    } else if (data.email.length > 35) {
      errors.email = 'El nombre de usuario no puede tener más de 35 caracteres';
    }
  
    if (!data.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (!/\d/.test(data.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    } else if (data.password.length < 6 || data.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
  
    return errors;
  }
  
  export default Validate;