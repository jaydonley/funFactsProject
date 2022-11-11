import React from 'react'
import {Link} from 'react-router-dom'

const Fact_Three = () => {
  return (
    <div className='container' id='Fact_Three'>

        <h4 className='center' id='f3h4'>In the comics, Raphael punched out Hitler</h4>

        <div className='fact_container'>
        
          <p id='f3p_text'>In Teenage Mutant Ninja Turtles Adventures #64, the Turtles from the future end up in the past, with Raphael absolutely decking Adolph Hitler in the face. Also, Hitler takes a quiet pill because he thinks that the Turtles are demons from Hell. Did we say that the comic was initially much darker and made for adults? Because, yeah....  Definitely for adults. <br/><br/>
          
          <Link to='/'>
            <button type='button'id='f3returnHomeButton'>Return Home</button>
          </Link>

          </p>
          
        </div>
    </div>
  )
}

export default Fact_Three;