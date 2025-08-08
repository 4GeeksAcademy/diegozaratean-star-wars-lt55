import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardNave } from "../components/CardNave.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  const [naves, setNaves] = useState([])

  useEffect(()=>{
	console.log('se cargo el componente')
	fetch('https://www.swapi.tech/api/starships')
	.then( (reponse)=> reponse.json() )
	.then( (data)=> setNaves(data.results) )
	// .then( (data)=> console.log(data.results) )

  },[])

	return (
		<div className="text-center mt-5">
			<h1>Naves  </h1>
			<div className="row flex-row flex-nowrap overflow-x-auto">
				{naves.map((nave)=> <CardNave key={nave.uid} uid={nave.uid}  nombre={nave.name} nave={nave}/>)}
			</div>
			
		</div>
	);
}; 