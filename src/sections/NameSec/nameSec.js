import React from 'react';
import "./nameSec.css"
import { Loading } from '../../components/loading/loading.main';

export default class NameSec extends React.PureComponent {

  render() {

    return (
      <div className="name-sec">
        <Loading color="rgb(68, 78, 88)"/>
        
        <div className="name">


          <div className="word">
            <div className="t">T</div>
            <div className="o">O</div>
            <div className="m">M</div>
          </div>

          
          <div style={{visibility: "hidden"}}>T</div>

          <div className="word">
            <div className="c">C</div>
            <div className="h">H</div>
            <div className="e">E</div>
            <div className="n">N</div>
            <div className="g">G</div>
          </div>

        </div>
      </div>
    );
  }
}

