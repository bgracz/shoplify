import React, {useState, useEffect} from "react";
import TinderCard from 'react-tinder-card';

  function Cards() {
    let storedNames = JSON.parse(localStorage.getItem("LIST"));
    const [list, addtoList] = useState(storedNames == null ? localStorage.setItem("LIST", JSON.stringify([])) : storedNames);
    useEffect(() => {
      addtoList(storedNames)
    }, [storedNames.length])

    function debug(){
      addtoList(storedNames.reverse());
    }

    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameOfItem, index) => {
      if (direction === "left") {
        storedNames.splice(index, 1);
        localStorage.setItem("LIST", JSON.stringify(storedNames));
        setLastDirection("bought")
      } else if (direction === "right") {
        // storedNames.splice(index, 1);
        // storedNames.unshift({name: nameOfItem});
        // localStorage.setItem("LIST", JSON.stringify(storedNames));
        setLastDirection("remind me later")
      }
    }

    return (
      <div>
        <div className='cardContainer'>
          {list.map((item, index) =>
            <TinderCard className='swipe' preventSwipe='up, down' key={index} onSwipe={(dir) => swiped(dir, item.name, index)}>
              <div>
              <div className='card'>
              <h3>{item.name}</h3>
              </div>
              </div>
            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 className='infoText'> {lastDirection}</h2> : <h2 className='infoText' />}
        {/* <button onClick={debug}>Debug/Load</button> */}
      </div>
    )
  }

export default Cards;
