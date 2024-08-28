import React from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Second() {
  return (
    <div className="container-fluid"> 
      <div className="row align-items-center flex-wrap"> 
        <div className="col-lg-6 col-md-12 text-center"> 
          <img 
            className="img-fluid"  
            src='./man3.png' 
            alt='Man' 
            style={{ 
                width: '770px', 
                height: '800px',
               
            }} 
          />
        </div>
        <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start mt-4 mt-lg-0"> 
          <div className=" "> 
            <h1 className='text-light fs-3 mt-3'>All about VR</h1>
            <p className='text-light mt-3'>
              VR uses headsets and controllers to immerse users in<br/>
              digital environments, transforming industries like<br/>
              gaming and education with ongoing technological<br/>
              advancements.
            </p>
            <div className="d-flex  gap-3 mt-3"> 
              <BsArrowUpRightCircleFill style={{ 
                fontSize: '2rem',  
                color: 'teal',    
              }} />
              <button className='slanted-buttons ml-2'>Know more about VR</button>
            </div>
            <div className="row mt-4"> 
        <div className="col-lg-6 col-md-12 d-flex align-items-center gap-3 mt-2"> 
          <img src='img1.jpg' alt='img1' 
            style={{ 
              width: '100%',  
              maxWidth: '224px',  
              height: '200px',
              border: '3px solid teal',
              borderRadius: '20px',  
              boxShadow: '0 0 15px teal',  // Glowing effect
            }} 
          />
          <div className="ml-3"> 
            <h5 className='text-light fs-5'>VR glasses 3D<br/> virtual reality.</h5>
            <p className='text-success btn'>Shop now ---</p>
          </div>
        </div>
        
        <div className="col-lg-6 col-md-12 d-flex align-items-center gap-3 mt-2"> 
          <img src='img2.jpeg' alt='img2' 
            style={{ 
              width: '100%',  
              maxWidth: '224px',  
              height: '200px',
              border: '3px solid teal',
              borderRadius: '20px',  
              boxShadow: '0 0 15px teal',  // Glowing effect
            }} 
          />
          <div className="ml-3"> 
            <h5 className='text-light fs-5'>Oculus Rifts<br/> virtual reality.</h5>
            <p className='text-success btn'>Shop now ---</p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Second;
