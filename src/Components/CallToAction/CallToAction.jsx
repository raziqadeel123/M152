import React from 'react';

import jordan from '../../assets/jordan.jpg';
import jumpNike from '../../assets/jump_Nike.jpg';
function CallToAction() {
  return (
    <div className='tile is-ancestor p-4 bg-color1 m-4 '>
      <div className='tile is-vertical is-9 p-4 '>
        <div className='tile'>
          <div className='tile is-parent p-4 '>
            <article className='tile is-child box '>
              <p class='title'>New Araivale</p>
              <p class='subtitle'>explore are all the new artikels</p>
              <figure class='image is-4by3  '>
                <a href='#'>
                  <img className='cursor-pointer ' src={jordan} />
                </a>
              </figure>
            </article>
          </div>
          <div className='tile is-8 is-vertical'>
            <div className='tile'>
              <div className='tile is-parent'>
                <article className='tile is-child box'>
                  <h1 className='title'>Trendy Collection</h1>
                  <p className='subtitle'>Subtitle</p>
                </article>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child box'>
                  <p className='title'>Seven</p>
                  <p className='subtitle'>Subtitle</p>
                </article>
              </div>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <h1 className='title'>Trendy Collection</h1>
                <p className='subtitle'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa in minima dignissimos consectetur ad nihil maiores
                  dolore placeat, earum perferendis tenetur nulla quos at
                  repellat accusantium itaque voluptate quam explicabo!
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className='tile'>
          <div className='tile is-8 is-parent'>
            <article className='tile is-child box'>
              <p className='title'>Nine</p>
              <p className='subtitle'>Subtitle</p>
              <div className='content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
          <div className='tile is-parent bg-yellow'>
            {/* <article className='tile is-child box'>
              <p className='title'>Ten</p>
              <p className='subtitle'>Subtitle</p>
              <div className='content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article> */}
          </div>
        </div>
      </div>
      <div className='tile is-parent'>
        <article className='tile is-child box '>
          <figure class='image is-4by3 img-h '>
            <a href='#'>
              <img src={jumpNike} />
            </a>
          </figure>
        </article>
      </div>
    </div>
  );
}

export default CallToAction;
