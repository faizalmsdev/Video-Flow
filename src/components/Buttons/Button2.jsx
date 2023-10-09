    import React from 'react';
    import './button2.css';

    const Button2 = ({text,type}) => {
    return (
        <button className="cssbuttons-io" type={type}>
        <span>{text}
        </span>
        </button>
    );
    };

    export default Button2;
