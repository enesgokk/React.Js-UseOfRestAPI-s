import React from 'react'
import "./country.css"; 

function SearchForms(props) {


	return (
		<form className="searchBox">
		
			<input 
				className="searchDesign"  
				type="text" 
				placeholder="search countries"
				value={props.search}
			 	onChange={props.handleChange} 
			 />

		</form>
	)
}

export default SearchForms;