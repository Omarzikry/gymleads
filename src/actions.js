import axios from 'axios';
//import {getCharachterObjectLocation} from './utils/helperFunctions';


export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_STARTED = "FETCH_PEOPLE_STARTED";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";


// use redux-thunk to fetch people data
export const fetchPeople = (url) => {
    return dispatch => {
        dispatch(fetchPeopleStarted);
        axios
            .get(url)
            .then(res => {
                res.data.results = res.data.results.map((charachter,index) => {
                    const items = JSON.parse(localStorage.getItem('state'));
                    !items || !items.people[index].isFavourite? charachter.isFavourite = false : charachter.isFavourite = true ;
                    return charachter;
                })
                dispatch(fetchPeopleSuccess(res.data.results));
            })
            .catch(err => {
                dispatch(fetchPeopleFailure(err.message))
            });
    }
}


const fetchPeopleSuccess = people => ({
    type: FETCH_PEOPLE_SUCCESS,
    payload: [
        ...people
    ]
});

const fetchPeopleStarted = () => ({
    type: FETCH_PEOPLE_STARTED
});

const fetchPeopleFailure = error => ({
    type: FETCH_PEOPLE_FAILURE,
    payload: {
        error
    }
})

// add character to favourite list
export const addFavourite = charachter => {
    return({
        type: ADD_FAVOURITE,
        payload: {
            name: charachter.name
        }
    })
}
// remove character from favourite list
export const removeFavourite = charachter => {
    return({
        type: REMOVE_FAVOURITE,
        payload: {
            name: charachter.name
        }
    })
}