import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    const{name,capital,demonym,flag,population,region}=props.country;
    return (
        <div className = 'country-details'>
            <img src={flag} alt="" />
            <h1>Hi i am {name}</h1>
            <p>{capital}</p>
            <p>{demonym}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;