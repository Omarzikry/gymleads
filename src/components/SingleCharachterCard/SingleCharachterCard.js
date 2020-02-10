import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import * as actions from "../../actions";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
//import {useLocation} from 'react-router-dom';


const SCardTitle = styled.h1 `
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem;
`;

const SContent = styled.div`
padding: 1em;
p{
    margin: 0.5rem 0;
}
h2{
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
}
li{
    margin-top: 0.5rem 0;
}
button{
    margin-top: 2rem
}
`;

const SContainer = styled.div`
width: 90%;
margin: 0 auto;
`;


const SingleCharachterCard = props => {
  const [charachter,setCharachter] = useState('');
  const [loading,setLoading] = useState(true);
  const [homeWorld,setHomeWorld] = useState('');
  const [starshipsArray,setStarshipsArray] = useState([]);
  
  const dispatch = useDispatch();
  let history = useHistory();
  //get search params
  const params = new URLSearchParams(history.location.search); 
  const getIsFavourite = params.get('isFavourite');
  const [isFavourite,setIsFavourite] = useState(getIsFavourite === 'true');
  useEffect(() => {
    const id = window.location.href.split('/')[4];
    axios.get(`https://swapi.co/api/people/${id}`)
    .then(res => {
      setCharachter({
        ...res.data
      });
      axios
      .get(res.data.homeworld)
      .then(res => {
        setHomeWorld(res.data.name)
        setLoading(false);
      })
      res
      .data
      .starships
      .map(starship => {
        axios
        .get(starship)
        .then(res => {
          setStarshipsArray(starshipsArray => [
            ...starshipsArray,
            res.data.name
          ]);
        })
      })
    });
    setIsFavourite(getIsFavourite === 'true');
  }, []);

const addFavouriteClickHandler = (charachter) => {
    dispatch(actions.addFavourite(charachter));
    setIsFavourite(true);
};

const removeFavouriteClickHandler = (charachter) => {
  dispatch(actions.removeFavourite(charachter));
  setIsFavourite(false);
};
  return ( 
  <SContainer> 
      {
    loading
      ? <p>Loading...</p>
      : <Paper>
          <SCardTitle>{charachter.name}</SCardTitle>
          <SContent>
          <p>Height: {charachter.height}</p>
          <p>Homeworld: {homeWorld}</p>
          {starshipsArray.length !==0 ?<h2>Starships:</h2>: ''}
          <ul>
              {starshipsArray.map(starship => <li key={starship}>{starship}</li>)}
          </ul>
          {isFavourite ? <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => {
          removeFavouriteClickHandler(charachter)
          }}
        >
          Unfav
        </Button>:<Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
          addFavouriteClickHandler(charachter)
          }}
        >
          Favourite
        </Button>}
          </SContent>
        </Paper>
  }
   </SContainer>
    );
};

export default SingleCharachterCard;