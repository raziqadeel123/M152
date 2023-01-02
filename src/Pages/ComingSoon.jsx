import React from 'react';
import Typewriter from 'typewriter-effect';
import Header from '../Components/header/Header';

const ComingSoon = () => {
  return (
    <>
      <Header />
      <div className='d-f f-jc f-ac h50p mt-6'>
        <h2 className='mt-6'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ['COMING SOON!'],
            }}
          />
        </h2>
      </div>
    </>
  );
};

export default ComingSoon;
