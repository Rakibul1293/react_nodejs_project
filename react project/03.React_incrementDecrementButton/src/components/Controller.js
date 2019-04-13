import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Controller = ({ controller, changeIncrease, changeDecrease }) => {

    const increaseHandler = (event) => {
        let value = event.target.value
        if (!value) {
            changeIncrease(0)
        } else {
            changeIncrease(parseInt(value, 10))
        }
    }

    const decreaseHandler = (event) => {
        let value = event.target.value
        if (!value) {
            changeDecrease(0)
        } else {
            changeDecrease(parseInt(value, 10))
        }
    }

    return (
        <div className='d-flex m-auto' style={{ width: '500px' }}>
            <input
                type='text'
                className='form-control d-inline'
                placeholder='Increase By'
                // onChange={ (event) => changeIncrease(parseInt(event.target.value, 10)) }
                // onChange={ (event) => (!event.target.value) ? changeIncrease(0) : changeIncrease(parseInt(event.target.value, 10)) }
                onChange={increaseHandler}
                value={controller.increaseBy} />

            <input
                type='text'
                className='form-control d-inline'
                placeholder='Decrease By'
                // onChange={ (event) => changeDecrease(parseInt(event.target.value, 10)) }
                // onChange={ (event) => (!event.target.value) ? changeDecrease(0) : changeDecrease(parseInt(event.target.value, 10)) }
                onChange={decreaseHandler}
                value={controller.decreaseBy} />
        </div>
    )
}

export default Controller;