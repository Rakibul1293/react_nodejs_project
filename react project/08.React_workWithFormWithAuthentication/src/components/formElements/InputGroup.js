import React from 'react'
import shortid from 'shortid'
import classnames from 'classnames'
import propTypes from 'prop-types'

const InputGroup = ({
    type,
    label,
    placeholder,
    info,
    error,
    name,
    value,
    onChange
}) => {
    
    const id = shortid.generate()
    // console.log(label)

    return (
        <div className="form-group">
            <label htmlFor={ id }> { label } </label>
            <input 
                type={ type }
                name={ name } 
                className= { classnames('form-control', { 'is-invalid': error }) }
                id={ id } 
                placeholder={ placeholder } 
                value={ value }
                onChange = { onChange }
            />
            { info && <small className="form-text text-muted"> { info } </small> }
            { error && <div className="invalid-feedback"> { error } </div> }
        </div>
    )
}

InputGroup.propTypes = {
    type: propTypes.string.isRequired,
    label: propTypes.string,
    placeholder: propTypes.string.isRequired,
    info: propTypes.string,
    error: propTypes.string,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
}

InputGroup.defaultProps = {
    type: 'text',
    placeholder: 'Enter Your Text',
    value: ''
}

export default InputGroup