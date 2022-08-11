import React, { useState } from "react";

function Sushi({ sushiData: { id, name, img_url, price, created_at }, handleEaten, handlePrice, notshown, budget }) {

  //callback to identify eaten sushis
  function handleIsEaten(e) {
    if (budget >= price && !notshown) {
      handleEaten(id)
      handlePrice(price)
    } else if (budget < price && !notshown) {
      alert('Too expensive')
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {notshown ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
