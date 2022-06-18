import React from 'react';

const Button = ({handler ,text}) => {
    return (
        <div className={'mt-4'}>
            <button
                className={'btn-lg btn-primary'}
                onClick={(e) => {
                    e.preventDefault()
                    handler()
                }}
            > {text}</button>
        </div>
    );
};

export default Button;