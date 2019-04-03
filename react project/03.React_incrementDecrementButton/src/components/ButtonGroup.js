import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

const ButtonGroup = ({ controller, changeValue }) => {
    return (
        <div className="btn-group my-3" role='group' >
            <button
                onClick={() => changeValue(1)}
                type='button'
                className='btn btn-secondary'> +1
            </button>

            <button
                onClick={() => changeValue(-1)}
                type='button'
                className='btn btn-secondary'> -1
            </button>

            <button
                onClick={() => changeValue(controller.increaseBy)}
                type='button'
                className='btn btn-secondary'>
                Increase By {controller.increaseBy}
            </button>

            <button
                onClick={() => changeValue(controller.decreaseBy * -1)}
                type='button'
                className='btn btn-secondary'>
                Decrease By {controller.decreaseBy}
            </button>
        </div>
    )
}

export default ButtonGroup;