import React, {Component} from "react";
import "./loader.css";
import loader from "./assets/logo.png";

class Loader extends Component {
	render(){   
	   return (
			<h1><img src={loader} className="loader-icon"/></h1>
		)
	}
}

export default Loader