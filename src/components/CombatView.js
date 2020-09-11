import React, {useState} from "react";
import PokeDetailCard from "./PokeDetailCard";
import "./../css/CombatView.css";


const CombatView = ({
  match: {
    params: { pokemon1, pokemon2 },
  },
}) => {
  const [dataP1,setDataP1]=useState();
  const [dataP2,setDataP2]=useState();
  const [statusP1,setStatusP1]=useState("Is ready to fight!");
  const [statusP2,setStatusP2]=useState("Is moving next!");
  const [currentPlayer,setCurrentPlayer]=useState(1);
  

  const playerOneMove=()=>{
    const P1_name = dataP1.name;
    const P2_name = dataP2.name;
    const P2_stats_hp = dataP2.stats[0]; //access base_stat for real value
    const P1_move_pp = dataP1.moves[0].pp;
    const P1_move_name = dataP1.moves[0].name;
    console.log(`${P1_name} inflicts ${P1_move_pp} damage on ${P2_name} with ${P1_move_name}.`);
    setStatusP1(`uses ${P1_move_name}!`);
    setStatusP2(`takes ${P1_move_pp} damage!`);

    
    P2_stats_hp.base_stat-=P1_move_pp;
    if (P2_stats_hp.base_stat<=0) {
      P2_stats_hp.base_stat=0;
      console.log(`${P1_name} has won against ${P2_name}`);
      setStatusP1(`LOSES!`);
      setStatusP2(`WINS!`);
      // no one can play anymore
      setCurrentPlayer(0);
    }else{
      setCurrentPlayer(2);
    }
    
  }
  
  const playerTwoMove=()=>{
    const P1_name = dataP1.name;
    const P2_name = dataP2.name;
    const P1_stats_hp = dataP1.stats[0]; //access base_stat for real value
    const P2_move_pp = dataP2.moves[0].pp;
    const P2_move_name = dataP2.moves[0].name;
    console.log(`${P2_name} inflicts ${P2_move_pp} damage on ${P1_name} with ${P2_move_name}.`);
    setStatusP2(`uses ${P2_move_name}!`);
    setStatusP1(`takes ${P2_move_pp} damage!`);
    
    P1_stats_hp.base_stat-=P2_move_pp;
    if (P1_stats_hp.base_stat<=0) {
      P1_stats_hp.base_stat=0;
      console.log(`${P2_name} has won against ${P1_name}`);
      setStatusP1(`LOSES!`);
      setStatusP2(`WINS!`);
      // no one can play anymore
      setCurrentPlayer(0);
    }else{
      setCurrentPlayer(1);
    }
  }
  


  return (
    <div className="combat">
      <div className="pokemon1">
        <button disabled={currentPlayer!==1} onClick={() => playerOneMove()}>FIGHT!</button>
        <PokeDetailCard id={pokemon1} transferData={setDataP1} moveStatus={statusP1} includeMoves moveHandler={playerOneMove} btnDisabled={currentPlayer!==1}/>
      </div>

      <div className="pokemon2">
        <button disabled={currentPlayer!==2} onClick={() => playerTwoMove()}>FIGHT!</button>
        <PokeDetailCard id={pokemon2} transferData={setDataP2} moveStatus={statusP2} includeMoves moveHandler={playerTwoMove} btnDisabled={currentPlayer!==2}/>
      </div>
    </div>
  );
};

export default CombatView;
