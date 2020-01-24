import React from 'react';

const Quote = props => {
  return (
    <div className='quote-card'>
    <h2 className='quote'>"{props.quoteObj.quote}"</h2>
    <p className='quote-author'>--{props.quoteObj.author}</p>
    </div>
  )
}

export default  Quote;