import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import { useEffect, useState } from "react";
export const Nave = props => {
  
  const [nave, setNave] = useState({})


  const { naveId } = useParams()
  console.log( useParams())
  console.log(naveId)

  useEffect(()=>{
    console.log('comopnente disponible')
    fetch('https://www.swapi.tech/api/starships/' + naveId)
    .then( (response)=> response.json() )
    .then( (data)=> setNave(data.result.properties) )
    // .then( (data)=> console.log(data.result.properties) )
  },[])
 
  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">ID: {naveId}</h1>
      <p className="">Name: {nave.name}</p>
      <p className="">Model: {nave.model}</p>
      <p className="">Manufacturer: {nave.manufacturer}</p>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Nave.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
