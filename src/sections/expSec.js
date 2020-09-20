import React from 'react';
import "./style.css"

export default class ExpSec extends React.PureComponent {

  render() {

    return (
        <div className="exp-sec">
        <div className="headline">Experience</div>

        <div class="ui grid" style={{width: '80vw', color: 'rgb(13, 182, 204)'}}>

          <div class="eight wide column" style={{textAlign: 'center', fontSize:'30px', color: 'rgb(10, 160, 200)'}}>Work experience</div>
          <div class="eight wide column" style={{textAlign: 'center', fontSize:'30px', color: 'rgb(10, 160, 200)'}}>Volunteer experience</div>

          <div class="sixteen wide column"></div>

          <div class="four wide column edu-date">07/2019 - 08/2019 </div>
          <div class="four wide column" style={{fontSize: '20px'}}>Web developer trainee, 
                                                                  <a 
                                                                  href="https://www.atal.com" 
                                                                  target="_blank" 
                                                                  rel="noopener noreferrer"
                                                                  style={{paddingLeft: '10px'}}>
                                                                    Atal
                                                                    </a>
            </div>
          <div class="four wide column"></div>
          <div class="four wide column"></div>

          <div class="four wide column edu-date">09/2020 - present </div>
          <div class="four wide column" style={{fontSize: '20px'}}>Fintech Data Scientist, 
                                                                  <a 
                                                                  href="https://www.forexforest.net" 
                                                                  target="_blank" 
                                                                  rel="noopener noreferrer"
                                                                  style={{paddingLeft: '10px'}}>
                                                                    Forex Forest
                                                                    </a>
          </div>                                                        
          <div class="four wide column edu-date">08/2020 - present</div>
          <div class="four wide column" style={{fontSize: '20px'}}>AI engineer, 
                                                                  <a 
                                                                  href="https://www.earth.org" 
                                                                  target="_blank" 
                                                                  rel="noopener noreferrer"
                                                                  style={{paddingLeft: '10px'}}>
                                                                    Earth.org
                                                                    </a>
          </div>                                   

        </div>

      </div>
    );
  }
}
