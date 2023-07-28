import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ALL_FAV = "ALL_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (err) {
         console.error(err);
      }
   };
};


 export const allFav = () => {
   const endpoint = 'http://localhost:3001/rickandmorty/favorites';
   return (dispatch) => {
      axios.get(endpoint).then(({ data }) => {
         console.log(data,"here")
         return dispatch({
            type: ALL_FAV,
            payload: data,
      });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (err) {
         console.error(err);
      }
   };
};

export const filterCards = (gender) => {
    return { 
            type: FILTER,
            payload: gender
    }
}

export const orderCards = (orderType) => {
    return {
        type: ORDER,
        payload: orderType
    }  
     
    
    }
