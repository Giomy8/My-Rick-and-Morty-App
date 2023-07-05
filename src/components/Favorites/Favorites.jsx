import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { orderCards } from "../../redux/actions/actions";

export default function Favorites(){
    const traerFav = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
        }

    return (
    <div>
        <div>
            <select onChange={handleOrder}>
                <option value="order" disabled = 'disabled'>Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="filter" disabled = 'disabled'>Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <h1>Favorites</h1>
        <Cards characters = {traerFav}/>
        </div>
        )
}