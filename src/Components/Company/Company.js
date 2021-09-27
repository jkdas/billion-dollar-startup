import React from 'react';
import './Company.css';
//Fontawesome icon import here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//StartUp Company information component
const Company = (props) => {
    //StartUp Company destructuring 
    const { img, company, founder, country, valuation, valuationDate, NumOfFounder, Industry } = props.company;
    return (
        <div className="col-md-4">
            <div className="single-company">
                <div className="founder-img">
                    <img src={img} alt="" />
                </div>
                <h5>Company Name: {company}</h5>
                <p>Founder: {founder}</p>
                <p>Country: {country}</p>
                <p>Valuation (billion): $ {valuation}</p>
                <p>Valuation Date: {valuationDate}</p>
                <p>Number of Founder: {NumOfFounder}</p>
                <p>Industry: {Industry}</p>
                {/* Add to cart button */}
                <button className="btn btn-primary mb-4 p-1"
                    onClick={() => props.handleAddToCart(props.company)}
                ><FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart
                </button>
            </div>

        </div>
    );
};

export default Company;