import React from 'react';

function IdCard(props) {
  return (
    <div style={{ display: 'flex', border: '1px solid black', width: '400px' }}>
      <div>
        <img src={props.picture}></img>
      </div>
      <div>
        <ul>
          <li>first name : {props.firstName}</li>
          <li>last name : {props.lastName}</li>
          <li>Gender : {props.gender}</li>
          <li>height : {props.height}</li>
          {/* enter date */}
          <li>Birth : {props.birth.toString().slice(0, 15)}</li>
        </ul>
      </div>
    </div>
  );
}

export default IdCard;
