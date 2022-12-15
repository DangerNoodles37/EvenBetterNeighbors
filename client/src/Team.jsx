import React from 'react';
import NavBar from './NavBar';

function Team() {
  return (
    <div className='teamPage' data-testid='team'>
      <div>
        <NavBar />
      </div>

      <div className='allTeamPhotos'>
        <div className='teamBox'>
        <div className='teamHeader'>CURRENT DEVELOPER TEAM</div>
        <div className='zach'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/A0Q4L5l.png'
          ></img>
          <div className='teamText'>
            <p>
              Camille Salter  <br />
              <br />
              Network Ninja
            </p>
            <a href='https://github.com/CamSalter'>Github</a>
          </div>
        </div>
        <div className='zach'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/A0Q4L5l.png'
          ></img>
          <div className='teamText'>
            <p>
              Andrew Hogan <br />
              <br />
              Network Ninja
            </p>
            <a href='https://github.com/andrewlallyhogan'>Github</a>
          </div>
        </div>
        <div className='chase'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/kXsSP3w.png'
          ></img>
          <div className='teamText'>
            <p>
              Eshaan Joshi <br />
              <br />
              Digital Data Detective
            </p>
            <a href='https://github.com/eshaan32'>Github</a>
          </div>
        </div>

        <div className='danny'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/5JzRNX2.png'
          ></img>
          <div className='teamText'>
            <p>
              Greg Jenner <br />
              <br />
              Automation Wizard
            </p>
            <a href='https://github.com/gregjenner'>Github</a>
          </div>
        </div>

        <div className='sakura'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/OU2oPsZ.jpg'
          ></img>
          <div className='teamText'>
            <p>
              Jason Goldman <br />
              <br />
              Server Wrangler
            </p>
            <a href='https://github.com/Trablink'>Github</a>
          </div>
        </div>
        </div>
      </div>
      
      <div className='allTeamPhotos'>
        <div className='teamBox'>
        <div className='teamHeader'>ORIGINAL DEVELOPERS</div>
        <div className='zach'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/A0Q4L5l.png'
          ></img>
          <div className='teamText'>
            <p>
              Zach Hall <br />
              <br />
              Network Ninja
            </p>
            <a href='https://github.com/zachh85'>Github</a>
          </div>
        </div>

        <div className='chase'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/kXsSP3w.png'
          ></img>
          <div className='teamText'>
            <p>
              Chase Benjamin <br />
              <br />
              Digital Data Detective
            </p>
            <a href='https://github.com/chasebenj'>Github</a>
          </div>
        </div>

        <div className='danny'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/5JzRNX2.png'
          ></img>
          <div className='teamText'>
            <p>
              Danny Zheng <br />
              <br />
              Automation Wizard
            </p>
            <a href='https://github.com/dannyzheng159'>Github</a>
          </div>
        </div>

        <div className='sakura'>
          <img
            className='teamPhoto'
            src='https://i.imgur.com/DHJlkOx.png'
          ></img>
          <div className='teamText'>
            <p>
              Sakura Akiyama-Bowden <br />
              <br />
              Server Wrangler
            </p>
            <a href='https://github.com/sakurakiyama'>Github</a>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Team;
