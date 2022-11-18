import React from 'react'

function Counter({ sum }) {
  return (
    <div>
        <div key={sum}>Number of Pokemon:{sum}</div>
    </div>
  )
}

export default Counter