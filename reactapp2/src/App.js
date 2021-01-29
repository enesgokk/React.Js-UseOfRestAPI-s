import React, {useState, useEffect} from "react";
import './App.css';
import "./country.css" 
import SearchForms from "./SearchForms";
import CountryList from "./CountryList";


const App=()=> {
	const[search, setSearch]= useState("");

	const handleChange= event=> setSearch(event.target.value);


	return (
		<div >
			
			<h2>Country API's https://restcountries.eu/rest/v2/all</h2>

			<SearchForms search={search} handleChange={handleChange} />
			<br/>
			<CountryList search={search} />

		</div>
	)
}

export default App;













/*export default function App() {
	return (
		<div className="App">
		<h1>React Dersleri</h1>
			<form>
				<input type="text" placeholder="adiniz"/>
				<br/><br/>
				<select name="sehir">
					
					<option value="" disabled>
						Şehir Seçiniz
					</option>

					<option value="ankara">Ankara</option>
					<option value="izmir">İzmir</option>
					<option value="istanbul">İstanbul</option>
				</select>	

				<br/><br/>
				<textarea name="bio" placeholder="biografiniz" cols="30" rows="10"></textarea>
				<br/>
				<button>Gönder</button>





			</form>
			
		</div>
	)
}

*/







/*const data=[
	{name: "Ahmet"},
	{name: "Mehmet"},
	{name: "Ali"},
	{name: "Veli"}
];





export default function App() {

	const [users,setUsers]=useState(data);

	return (
		<div className="App">
			<h3>React Dersleri</h3>
			<input type="text" placeholder="arama"/>
			{users.map((user, index)=>{
				return <p key={index} >{user.name}</p>
			}) }
			
		</div>
	)
}
*/









/*export default function App() {

	const [isim, setIsim]=useState("");
	const [hataMesaji, setHataMesaji]=useState("");

	const [girisYapildi, setGirisYapildi]=useState(false);


	const handleChange =event=>setIsim(event.target.value);


	const handleSubmit=isim=>{
	 	if(isim.length<6){
	 		setHataMesaji("6 karakterden az girilemez")
	 	} 
		else{
			setHataMesaji("Giris Basarili");
			setGirisYapildi(true);
		}
		
	};



	return (
		<div className="App">

			<h2>React Dersleri</h2>

			{girisYapildi ?

				<React.Fragment>
					 <h2>Hosgeldiniz</h2> 
					 <br/>

					 <button onClick={()=> setGirisYapildi(false)} >Çıkış Yap</button>

			 	</React.Fragment>



			 : 
				<React.Fragment>
					<input 
						name="isim"  
						placeholder="isminiz"
						value= {isim}
						onChange={handleChange}
					/>

					<button onClick={()=> handleSubmit(isim)} >Giriş</button>
					<br/>
					{hataMesaji ? <h2> {hataMesaji} </h2> : <h3>Giriş Yapiniz</h3> }
				</React.Fragment>
			}
			

			
		</div>
	);
}





/*
export default function App() {

	//const [isim]

	onClickEvent =(e)=>{
		document.getElementById("merhaba").text="anan";
	}


  return (

   <div>
 	<h3 id="merhaba" >Merhaba</h3>
 

 	<button onClick={this.onClickEvent}>Mesajı Degistir</button>

 	<MesajGoster/>
 </div>


  );
}

 



function MesajGoster() {
  
 return (
 
 <div>
 	<h3>Yazı 1</h3>
 	<h3>Yazı 2</h3>

 	<button>Mesajı Degistir</button>
 </div>


);
}
*/

