import React from 'react';
import Card from '../Card/Card';
const CardsList = props => {
    const {people,loading} = props;
    return (
        <div>
            <> {
    !loading && people
      ? people.map(character => {
        return (<Card character={character} key={character.name}/>);
      }): <p>loading...</p>
  }</>
        </div>
    );
};

export default CardsList;