import React, {Component} from 'react';
import Login from './login.js';
import Loader from './loader.js';
import logo from './assets/rakbank-logo.jpg';
import './App.css';


class App extends Component{
	constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
	render() {
	  return (
		<div className="App">
			<div class="header">
				<a href="#default" class="logo">
					<img src={logo} className="logo" alt="logo" />
				</a>
				<div class="header-right">
					<a class="active" href="#home">Home</a>
					<a href="#login">Login</a>			
				</div>
			</div>

			<div >
			{this.state.isLoading ? <Loader/>: <Login/>}
			</div>
		</div>
			
	  );
	}
}

export default App;
