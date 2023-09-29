import React from 'react'


const Home = ({states}) => {
  return (
    <div >
        {states.map((states)=> (
            <div className='bg-info'>
                <h2>{states.name}</h2>
                <h3>{states.language}</h3>

            </div>
        )) }
        
    
    </div>

  )
}

export default Home