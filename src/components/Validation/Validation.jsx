function validateEmail(email) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regexEmail.test(email);
  }
  
  function Validate(data) {
    const errors = {};
  
    if (!data.email) {
      errors.email = '* Username is required';
    } else if (!validateEmail(data.email)) {
      errors.email = '* Username must be a valid e-mail';
    } else if (data.email.length > 35) {
      errors.email = '* Username cannot be longer than 35 characters';
    }
  
    if (!data.password) {
      errors.password = '* Password is required';
    } else if (!/\d/.test(data.password)) {
      errors.password = '* Password must have at least one number';
    } else if (data.password.length < 6 || data.password.length > 10) {
      errors.password = '* Password must be between 6 and 10 characters';
    }
  
    return errors;
  }
  
  export default Validate;