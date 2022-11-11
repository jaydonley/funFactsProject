import React from 'react'
import { Link } from 'react-router-dom';

const FF_Home = (props) => {

  return (
    <div id='FF_Home'>
                <h3 className='center' id='headerH3'>So you've come seeking answers to the mysterious... <br/> Teenage Munant Ninja Turtles</h3>

    
        <div id='homeMainContainer'>
          <p>"The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April O'Neil and her cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan."</p>

          <div id='factButtonContainer'>
          <Link to='/Fact_One'>
            <button type='button' id='buttonOne'>
            Fact One
            </button>
            </Link>

            <Link to='Fact_Two'>
            <button type='button' id='buttonTwo'>
            Fact Two
            </button>
            </Link>

            <Link to='Fact_Three'>
            <button type='button' id='buttonThree'>
            Fact Three
            </button>
            </Link>
            
          </div>

        </div>
    
    
    </div>
  )
}

export default FF_Home;