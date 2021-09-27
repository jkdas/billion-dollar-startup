import React from 'react';
//StartUp company cart component after clicking add to cart button
const Founder = (props) => {
    //StartUp Information destructuring
    const { startUps } = props || {};
    //Total value adding using reducer function
    const totalReducer = (previous, startUp) => previous + startUp.valuation;
    const totalValuation = startUps.reduce(totalReducer, 0);

    return (
        <div className="bg-info bg-gradient rounded sticky-top">
            <h3 className="bg-secondary text-white fw-bold p-3">StartUp Information</h3>
            <h4>Total Startup Added: {startUps.length}</h4>
            <h5>Total Assets: $ {totalValuation} </h5>
            <ul>
                {
                    startUps.map(pd => <li>{pd.founder}</li>)
                }
            </ul>
        </div>
    );
};

export default Founder;