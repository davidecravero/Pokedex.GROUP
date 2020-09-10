import React from "react";
import PokeDetailCard from "./PokeDetailCard";
import "./../css/PokeDetail.css";

const PokeDetail = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div>
      <PokeDetailCard id={id} />
    </div>
  );
};

export default PokeDetail;
