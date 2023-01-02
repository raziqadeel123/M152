import React from 'react';
import Header from '../Components/header/Header';
import { GrMail } from 'react-icons/gr';
import { BsTelephoneFill } from 'react-icons/bs';
import bannerimg from './../assets/banner-img.jpg';

const Impressum = () => {
  return (
    <>
      <Header />
      <div className='columns border-shadow mrl-8 mtb-12'>
        <div className='column is-half'>
          <div className='bs-docs-section p-4'>
            <h3>Impressum</h3>
            <h5 className='mt-6'>Kontaktdaten</h5>
            <address>
              <strong>M152</strong> <br />
              <strong>Raziq Adeel</strong>
              <br />
              <abbr>
                testtrasse 23 <br />
                9000 Zürich
              </abbr>
              <br />
              <br />
              <abbr className='mr-3' title='Telefonnummer'>
                <BsTelephoneFill />
              </abbr>
              +47 000 000 00
              <br />
              <abbr className='mr-3' title='Email-Adresse'>
                <GrMail />
              </abbr>
              <a href='mailto:muhammad.adeel@edu.tbz.ch'>
                muhammad.adeel@edu.tbz.ch
              </a>
            </address>
          </div>
        </div>
        <div className='column is-half p-4'>
          <img className='p-4' src={bannerimg} alt='shoes img' />
        </div>
      </div>
    </>
  );
};

export default Impressum;
