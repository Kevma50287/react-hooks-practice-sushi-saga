import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handlePrice, budget }) {
  //useState to keep track of pages (represents each set of 4 sushis)
  const [page, setPage] = useState(1)

  function handleMoreSushi() {
    let newPage = page + 1
    setPage(newPage)
    let emptyArr = []
    setEaten(emptyArr)
  }

  //need to track IDs of which sushis have been eaten
  const [eaten, setEaten] = useState([])

  function handleEaten(id) {
    const foodID = id
    setEaten([...eaten, foodID])
  }

  //make a sushi component for each object
  function makeSushi(sushis) {
    const sushiArr = sushis.filter((sushi) => sushi.id < ((page * 4) + 1) && sushi.id > ((page - 1) * 4))
      .map((sushi) => {
        return (
          <Sushi
            sushiData={sushi}
            handleEaten={handleEaten}
            handlePrice={handlePrice}
            budget = {budget}
            notshown={eaten.includes(sushi.id) ? true : false}
          />
        )
      })
    return sushiArr
  }

  const sushiAvailable = sushis && makeSushi(sushis)


  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiAvailable}
      <MoreButton more={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
