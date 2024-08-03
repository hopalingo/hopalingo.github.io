const data = {
	title: 'Leaderboard',
	people: [
		{
			name: 'John Hancock',
			image: 'http://lorempixel.com/100/100',
			score: 2000
		},
		{
			name: 'Sebastian Lofgren',
			image: 'http://lorempixel.com/120/120',
			score: 2050
		},
		{
			name: 'Donald Trump',
			image: 'http://lorempixel.com/110/110',
			score: 51
		},
		{
			name: 'Bill Hader',
			image: 'http://lorempixel.com/105/105',
			score: 2103
		},
		{
			name: 'Salvador Dali',
			image: 'http://lorempixel.com/101/101',
			score: 2019
		}
	]
}

let Leaderboard = React.createClass({
	getInitialState: function() {
		return (data);
	},
	render: function() {
		return (
			<div className="Leaderboard">
				<Title title={this.state.title} />
				<List people={this.state.people} />
			</div>
		);
	}
});

let Title = React.createClass({
	render: function() {
		return (
			<div className="Title">{this.props.title}</div>
		);
	}
});

let List = React.createClass({
	compareArray: function(a,b) {
		if (a.score < b.score)
			return 1;
		if (a.score > b.score)
			return -1;
		return 0;
	},
	sortArray: function() {
		return this.props.people.sort(this.compareArray);
	},
	render: function() {
		
		let peopleList = this.sortArray();
		
		let people = peopleList.map(function(person, i) {
			return <Person name={person.name} score={person.score} image={person.image} />
		});
		
		return (
			<ul>
				{people}
			</ul>
		);
	}
});

let Person = React.createClass({
	render: function() {
		return (
			<li className="Person">
				<div className="Image" style={{ backgroundImage: 'url(' + this.props.image + ')'}}></div>
				<div className="Name">{this.props.name}</div>
				<div className="Score">{this.props.score}</div>
			</li>
		);
	}
})

// Render
ReactDOM.render(
	<Leaderboard />,
	document.getElementById('leaderboard')
);