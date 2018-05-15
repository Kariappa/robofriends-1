import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(user => this.setState({robots: user}))
			.catch(error => this.setState({robots: [{name: "Sorry, unfortunately we have a server error, please try to re-load the page later"}]}))
	}
	
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (!robots.length) ? 
		<h1>Loading</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		)
	}
}

export default App;