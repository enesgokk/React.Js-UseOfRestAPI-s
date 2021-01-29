import React, {useState, useEffect} from 'react';
import axios from "axios";


 function CountryList(props) {

 	const [countries, setCountries]= useState([]);

 	useEffect(() => {
 		
 		axios
 			.get("https://restcountries.eu/rest/v2/all")
 			.then(response=>setCountries(response.data))
 			.catch(error=>console.log({error}));

 	}, []);

 	return countries
 	.filter(country=>country.name.toLowerCase().includes(props.search.toLowerCase()))
 	.map(country => {
 		return (
			<div key={country.name} className="country">

				<div className="borderSize">
				<br/>
					<img className="imgSize" src={country.flag} alt={country.name}/>				
					<h3> {country.name} </h3>
					<p>{country.capital}</p>
				</div>	
				<br/>
			</div>
		);
 	});


	
}


export default CountryList;