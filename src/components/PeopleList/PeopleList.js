import React, {useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    fetchPeople
} from '../../actions';
import CardsList from "../CardsList/CardsList";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const PeopleList = () => {
    const dispatch = useDispatch();
  const people = useSelector(state => state.people);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const classes = useStyles();
  const [peopleArray,setPeopleArray] = useState(people);
  const [searchValue, setSearchValue] = useState();
    
  useEffect(() => {
    // fetching characters data and storing it in redux
dispatch(fetchPeople("https://swapi.co/api/people/"));
  },[]);

  const searchHandler = e => {
    setSearchValue(e.target.value);
  }
  const searchSubmitHandler = e => {
  e.preventDefault();
    axios.get(`https://swapi.co/api/people/?search=${searchValue}`).then(res => {
      setPeopleArray(res.data.results)
    })
  }
  return ( 
    <>
<form className={classes.root} noValidate autoComplete="off" onSubmit={searchSubmitHandler}>
  <TextField id="standard-basic" label="search" onChange={(e) => {searchHandler(e)}} />
  <button type="submit">
    Search
  </button>
</form>
    <CardsList people={peopleArray} loading={loading} error={error} />
    </>
    );
};

export default PeopleList;