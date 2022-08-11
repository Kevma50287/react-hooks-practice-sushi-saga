import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  //useState to hold API data
  const [sushis, setSushis] = useState(null)
  //need to track IDs of which sushis have been eaten
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)

  function handlePrice(price) {
    setPlates([...plates, price])
    setBudget(budget - price)
  }

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(dat=> setSushis(dat))
  }, [])




  console.log(plates)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handlePrice={handlePrice} budget={budget} />
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export { API };

export default App;
