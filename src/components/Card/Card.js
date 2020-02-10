import React,{useState} from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
const SCard = styled.div `
margin: 1em;
div{
    padding: 1em;
    p{
      padding-top: 0.5rem
    }
}
`;

const Card = ({
  character: {
    name,
    gender,
    url,
    isFavourite,
    homeworld
  }
}) => {
  const [planetName,setPlanetName] = useState();
  const [loading,setLoading] = useState(true);
  // get character id
    const id = url.split('/')[5];
    // access history
    const history = useHistory();
    // route to character single card
    const cardClickHandler = () => {
        history.push('/people/' + id + '?isFavourite=' + isFavourite)
    }
    // retrive planet name
    axios.get(homeworld).then(res => {
      setPlanetName(res.data.name);
      setLoading(false);
    });
  return (
    <SCard onClick={cardClickHandler}>
      <Paper>
        <h2>{name}</h2>
        <p>{gender === 'n/a'
            ? 'unkown'
  : gender} {!loading? `| ${planetName}`: ''}</p>
      </Paper>
    </SCard>
  );
};

export default Card;