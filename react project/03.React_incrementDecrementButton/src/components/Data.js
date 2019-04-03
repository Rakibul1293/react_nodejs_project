import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Data = (props) => <h1 className = 'display-3'> { props.value < 10 && props.value >= 0 ? `0${ props.value }` : props.value } </h1>;
const Data = ({ value }) => <h1 className='display-3'> {value < 10 && value >= 0 ? `0${value}` : value} </h1>;

export default Data;