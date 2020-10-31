import React, { useState } from 'react';
import "./navbar.css"
import t1 from '../../images/t1.png';
import t2 from '../../images/t2.png';



export default function Navbar() {

  const [ clicked, setClicked ] = useState(false);

    return (
        <div className={`navbar ${clicked? "showColor" : ""}`}>
            
          <div>
            <button className="button" type="submit" onClick={() => clicked? setClicked(false): setClicked(true)}>
              {clicked? 
                <img src={t2} className="tIcon" alt="" width="30px" height="30px" />
                :
                <img src={t1} className="tIcon" alt="" width="30px" height="30px" />
              }
            </button>
          </div>


      </div>
    );
  
}

