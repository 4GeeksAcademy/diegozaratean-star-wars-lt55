import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const {store, dispatch} =useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div>
					{store.navesFav.map((nave,index)=>
						<p key={index}>
							{nave} 
							<span className="mx-2" onClick={()=>dispatch(
								{
									 type: 'toggle_nave',
                        			payload: nave
								}
							)}>x</span>
						</p>
						)}
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action {store.navesFav.length}</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};