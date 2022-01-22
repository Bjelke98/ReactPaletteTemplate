import React from 'react';


const Enclosedtagtest = (props) => {
    const {...other } = props;
    return (
        <>
        <h2>Over</h2>

        <div {...other} />

        <h2>Under</h2>
        </>
    );
};

export default Enclosedtagtest;
