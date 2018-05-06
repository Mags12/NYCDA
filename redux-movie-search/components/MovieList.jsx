import React, { PropTypes, Component } from 'react'

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		this.props.fetchMovie(event.target.value);
	}

	componentDidMount() {
		//fetchMovie()
	}

	render() {
		let movies;
		if(this.props.movies) {
			movies = this.props.movies.map((movie) => {
				return <li key={movie.imdbID}>{movie.Title}</li>
			});
		} else {
			movies = [];
		}

		return (
			<div>
				<input type="text" onChange={this.onSearch}/>
				<h1> Movie List </h1>
				{this.props.requestPending && 				
					<h3> Request Pending </h3>
			 	}

				{!this.props.requestPending && 
					<div>			
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

export default MovieList;