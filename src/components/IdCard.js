import React from 'react';
import data from '../data/berlin.json';

function IdCard(props) {
  return (
    <div>
      <img src={props.picture}></img>
      <ul>
        <li>first name : {props.firstName}</li>
        <li>last name : {props.lastName}</li>
        <li>Gender : {props.gender}</li>
        <li>height : {props.height}</li>
        {/* enter date */}
        <li>Birth : {props.birth.toString().slice(0, 15)}</li>
      </ul>
    </div>
  );
}

export default IdCard;
