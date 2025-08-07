import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const CardNave = (props) => (
	<div className="card" style={{width: "18rem"}}>
        <img src={rigoImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">info. {props.uid}  {props.nave.uid} </p>
            <Link to={'nave/' + props.uid} className="btn btn-primary">ver nave</Link>
        </div>
    </div>
);