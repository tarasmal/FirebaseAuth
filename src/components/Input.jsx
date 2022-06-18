import React from 'react';

const Input = ({type, value, setValue, placeholder}) => {
    return (
        <>
            <input
                className={'form-control mt-2'}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </>
    );
};

export default Input;