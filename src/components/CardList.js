import React from "react";
import { Link } from "react-router-dom";
import "./../css/CardList.css";

const highResImageURL="https://pokeres.bastionbot.org/images/pokemon/[id].png";


// get pokemon id from details url (index doesn't match pokemon number)
const HQimg = (id) => {
  let result=<img className="poke-image" src={highResImageURL.replace("[id]",id)} />
  return result;
}
// get pokemon id from details url (index doesn't match pokemon number)
const extractID = (pokeURL) => {
  // parse whether url ends on / and remove it if it does
  let result=pokeURL.slice(-1)==="/"?pokeURL.substring(0,pokeURL.length-1):pokeURL;
  // now find last / before id 
  result=result.substring(result.lastIndexOf("/")+1);
  return result;
}

const CardList = (props) => {
  const id=extractID(props.data.url);
  return (
    <div className="poke-card-list">
      <h2>{props.data.name}</h2>
      <h3>#{id}</h3>
      {HQimg(id)}
      <Link to={`/detail/${props.data.name}`}>View Details</Link>
    </div>
  );
};
export default CardList;
