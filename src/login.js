import React, {Component} from "react"

class Login extends Component{
	render(){
		return (
			<div>
				<h1>User Login</h1>
				<p><input type="text" placeholder="username" /></p>
				<p><input type="password" /></p>
				<button type="button" onClick="">Login</button>
			</div>
		)
	}
}

export default Login