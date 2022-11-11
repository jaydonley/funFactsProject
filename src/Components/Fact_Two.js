import React from 'react'
import { Link } from 'react-router-dom'

const Fact_Two = (props) => {

  return (
    <div className='container' id='Fact_Two'>

        <h4 className='center' id='f2h4'>Pizza Hut sponsored a TMNT concert tour</h4>

        <div className='fact_container'>
        <p id='f2p_text'>The "Coming Out of Our Shells" tour featured the Turtles, Splinter, and Shredder sining rock songs and rapping throughout the United States. You could even buy VHS copies at Pizza Hut restaurants! <br/><br/>
          
        <Link to='/'>
          <button type='button' id='f2returnHomeButton'>Return Home</button>
        </Link>  
          </p>
        </div>
    </div>
  )
}

export default Fact_Two;