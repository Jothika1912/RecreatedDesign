import React from 'react';
import './first.css'
function First() {
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-center '>
      <h1 className='text-light fs-1 text-center mt-5 '>
        Step into your new world, embrace<br /> change.
      </h1>
      <p className='text-light text-center mt-2' style={{ opacity: 0.5 }}>
        The realm of virtual reality has become a tangible blend of reality and virtuality, offering an<br />
        open and immersive experience.
      </p>
      <button className=' slanted-buttons'>Buy Now</button>
    </div>
    </>
  );
}

export default First;
