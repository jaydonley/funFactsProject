import React from 'react'
import { Link } from 'react-router-dom'

const Fact_One = (props) => {

  return (
    <body id='ff-body'>
      
    
        
          <h4 className='center' id='f1h4'>It began as a parody of Daredevil</h4>
          
          <div className='fact_container'>
            <p id='f1p_text'>Creaters Kevin Eastman and Peter Laird wanted to poke fun at the dark, gritty, ninja-oriented trends of comics at the time. That is why the origin of the Turtles and Daredevil are so similar, why the ninja clan is "the Foot" like Marvel's is "The Hand", and other references. <br/><br/>
            
            <Link to='/'>
              <button type='button' id='f1returnHomeButton'>Return Home</button>
            </Link>
          </p>
          </div>
    </body>
  )
}

export default Fact_One;