import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';
import Founder from '../Founder/Founder';
// SatartUp Companies component goes here
const Companies = () => {
    // store startup companies info in an array
    const [companies, setCompanies] = useState([]);
    // store startup companies info in anonther array when button clicked
    const [startUps, setStartUps] = useState([]);

    // useEffect fuction for API data from locat file
    useEffect(() => {
        fetch('./billionDollarStartup.JSON')
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, [])
    // handleAddToCart fuction for button onclick event handler
    const handleAddToCart = (company) => {
        const newStartUps = [...startUps, company];
        setStartUps(newStartUps);
    }
    console.log(startUps)
    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {
                        companies.map(company => <Company
                            key={company.companyId}
                            company={company}
                            handleAddToCart={handleAddToCart}>
                        </Company>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                {
                    <Founder
                        startUps={startUps}>
                    </Founder>
                }
            </div>

        </div>

    );
};

export default Companies;