import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { orderCards, filterCards } from "../../redux/actions/actions";
import styles from "./Favorites.module.css";
import { IconArrowBackUp } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Favorites({ onClose }) {
  const traerFav = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  useEffect(() => {
    dispatch(orderCards("Ascendente"));
  }, [dispatch]);

  return (
    <div>
      
      <div className={styles.bar}>
      <Link to={"/home"}>
        <button className={styles.buttonback}>
          <IconArrowBackUp /> <span>Back to Home</span>
        </button>
      </Link>

        <select onChange={handleOrder}>
          <option value="">
            Order By
          </option>
          <option value="Ascendente">Ascending Order</option>
          <option value="Descendente">Descending Order</option>
        </select>

        <select onChange={handleFilter}>
          <option value="">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="todos">All</option>
        </select>
      </div>
      <Cards characters={traerFav} onClose={onClose} />
    </div>
  );
}
