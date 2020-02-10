import React, {useEffect,useState} from "react";
import {useSelector } from "react-redux";
import CardsList from "../CardsList/CardsList";
const FavouritesList = () => {
    const people = useSelector(state => state.people);
    const [favouriteCharachters,setFavouriteCharachters] = useState([]);
      
useEffect(() => {
    const filteredArray = [];
    // get favourite characters
    people.map(character => {
        if(character.isFavourite){
            filteredArray.push(character)
        }
    });
  setFavouriteCharachters(filteredArray);
},[]);
    return (
        <CardsList people={favouriteCharachters} loading={false} />
    );
};

export default FavouritesList;