import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_FAV:
             return {
            ...state ,
            myFavorites:[...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            // const newFavorite = state.myFavorites.filter((character) => character.id !== Number(action.payload));
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }

        case FILTER:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente"
                    ? state.allCharacters.sort ((a,b) => a.id - b.id)
                    : state.allCharacters.sort ((a,b) => b.id - a.id)
            }
        
            default:
                return {...state};
        }
};

export default reducer;

