import React from 'react';
import './App.css';
import { Loading } from './components/loading/loading.main';
import sp from './images/self-pic.jpg';

function App() {
  return (
    <div className="Largest-Container">

      <div className="bg-sec">
        <div style={{padding:"100px"}}>
        </div>
      </div>

{// CAUTION! The below info-page section also exists to prevent overlapping of the background page and other page
}
      <div className="name-sec">
          <Loading color="white" />
        <div>
          Tom Cheng
        </div>
        <div>
          --------------------------
        </div>
        <div style={{fontSize: '40px'}}>
          Computer Science Fresh Graduate
        </div>
      </div>

{// ----------------------------------------------------------------------------------------------------------------
}
      <div className="info-sec">
        <div style={{fontSize: "100px", padding: '50px'}}>Profile</div>
        <div className="row-container" style={{alignItems: 'flex-start', justifyContent:'space-evenly',  width: '75%', height:"45%"}}>
          <div className="col-container" style={{padding: "30px", width:'30%', height: '80%', color: "black", alignItems:'flex-start', justifyContent: 'space-evenly'}}>
            <div className="small-headline" >About Me</div>
            <div className='text'>I am a fresh Graduate with a major in computer science. I have a wide range of knowledge like blockchain, machine learning, cloud computing, frontend, backend. 
              Also I like working in a team, you'll learn faster and much more.</div>
          </div>

          <div className="image-cropper" style={{ padding: '30px'}}>
            <img src={sp} alt="self"/>
          </div>

          <div className="col-container" style={{padding: "30px", width:"30%", height: '80%', color: 'black', alignItems:'flex-start', justifyContent: 'space-evenly'}}>
            <div className="small-headline">Detaile</div>
            <div style={{fontWeight: 'bold'}}>Name: </div>
            <div> Tom </div>
            <div style={{fontWeight: 'bold'}}>Age:</div>
            <div>22 years old</div>
            <div style={{fontWeight: 'bold'}}>Location:</div>
            <div>Kwun Tong, Hong Kong</div>
          </div>
        </div>
      </div>

{// ----------------------------------------------------------------------------------------------------------------
}

        <div className="edu-sec">
          <div className="headline">Education</div>

          <div className='row-container'>
            <div className='date' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px', width: '30%', color: 'rgb(13, 182, 204)'}}>
              09/2016 - 06/2020
            </div>

            <div className="col-container" style={{alignItems: 'flex-start', width: '50%'}}>
              
              <div className='university-name' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px'}}>The Hong Kong University of Science and Technology</div>

              <div className='grade' style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold', padding: '30px', color: 'rgb(13, 182, 204)'}}>GPA: 2.92/4.30 ( 2:1 )</div>
            </div>

          </div>

        </div>

{// ----------------------------------------------------------------------------------------------------------------
}

        <div className="exp-sec">
          <div className="headline">Experience</div>

          <div className='row-container'>
            <div className='date' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px', width: '30%', color: 'rgb(13, 182, 204)'}}>
              07/2019 - 08/2019
            </div>

            <div className="col-container" style={{alignItems: 'flex-start', width: '60%'}}>
              
              <div className='job-title' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px'}}>Trainee</div>

              <div className='university-name' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px'}}>Atal Engineering Ltd</div>

              <div className='grade' style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold', padding: '30px', color: 'rgb(13, 182, 204)'}}>Front-end development 
              using React</div>
            </div>

            <div className="col-container" style={{alignItems: 'flex-start', width: '60%'}}>
              
              <div className='row-container'>
                <div className='date' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px', width: '30%', color: 'rgb(13, 182, 204)'}}>
                  08/2020 - present
                </div>

                <div className="col-container" style={{alignItems: 'flex-start', width: '60%'}}>
                  
                  <div className='job-title' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px'}}>AI Engineer</div>

                  <div className='university-name' style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: 'bold', padding: '30px'}}>Earth.org</div>

                  <div className='grade' style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold', padding: '30px', color: 'rgb(13, 182, 204)'}}>satellite image 
                  analysis</div>
                </div>
              </div>
            </div>

          </div>

        </div>

{// ----------------------------------------------------------------------------------------------------------------
}

        <div className="project-sec">
          <div className="headline">Project</div>
          
          <div className='row-container'>
            <div className='proj-title'>FYP project: 2D reflective image generation</div>
            
            <a
            className='proj-link'
            href="https://nbviewer.jupyter.org/github/ppoyusecci/2D-reflective-image-generation/blob/master/reflect_gan.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '50px'}}
          >
            nbviewer link
            </a>
          </div>
        </div>

{// ----------------------------------------------------------------------------------------------------------------
}
      <div className="contact-sec">
        <h1 style={{fontSize: "100px"}}>Contact</h1>
        <a
          className="contact-link"
          href="https://github.com/ppoyusecci"
          target="_blank"
          rel="noopener noreferrer"
          style={{padding: '50px'}}
        >
          My Github Page
        </a>
        
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/tom-cheng-826a7b1b1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{padding: '50px'}}
        >
          My Linkedin Profile Page
        </a>

        <a
          className="contact-link"
          href = "mailto: tomatwf@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{padding: '50px'}}
        >
          Send Email to me at tomatwf@gmail.com
        </a>

      </div>



{// ----------------------------------------------------------------------------------------------------------------
}
    </div>
  );
}

export default App;
