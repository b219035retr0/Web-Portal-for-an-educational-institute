
  export const authenticate = (data, next) => {
    console.log(`authenticate ${data}`)
    if (typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(data));
      // console.log(localStorage.jwt)
      next();
    }
  };
  



  
  
  export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('jwt')) {
      return JSON.parse(localStorage.getItem('jwt'));
    } else {
      return false;
    }
  };