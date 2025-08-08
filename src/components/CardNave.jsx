import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardNave = (props) =>{
    console.log('ya se leer')
    const {store, dispatch} =useGlobalReducer()

    return (
            <div className="card mx-2" style={{width: "18rem"}}>
                <img src={rigoImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">info. {props.uid}  {props.nave.uid} </p>
                    <Link to={'nave/' + props.uid} className="btn btn-primary">ver nave</Link>
                    <button onClick={()=>dispatch({
                        type: 'toggle_nave',
                        payload: props.nombre
                    })} >cambiar texto</button>
                </div>
            </div>
        );
}
    
   