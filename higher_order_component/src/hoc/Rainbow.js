import React from 'react'

const Rainbow = (WrappedComponent) => {
  console.log(WrappedComponent);
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
      {console.log(props)}
    </div>  
  )
  
}

export default Rainbow