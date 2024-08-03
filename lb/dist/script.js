const data = {
  title: 'Leaderboard',
  people: [
  {
    name: 'John Hancock',
    image: 'http://lorempixel.com/100/100',
    score: 2000 },

  {
    name: 'Sebastian Lofgren',
    image: 'http://lorempixel.com/120/120',
    score: 2050 },

  {
    name: 'Donald Trump',
    image: 'http://lorempixel.com/110/110',
    score: 51 },

  {
    name: 'Bill Hader',
    image: 'http://lorempixel.com/105/105',
    score: 2103 },

  {
    name: 'Salvador Dali',
    image: 'http://lorempixel.com/101/101',
    score: 2019 }] };




let Leaderboard = React.createClass({ displayName: "Leaderboard",
  getInitialState: function () {
    return data;
  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Leaderboard" }, /*#__PURE__*/
      React.createElement(Title, { title: this.state.title }), /*#__PURE__*/
      React.createElement(List, { people: this.state.people })));


  } });


let Title = React.createClass({ displayName: "Title",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Title" }, this.props.title));

  } });


let List = React.createClass({ displayName: "List",
  compareArray: function (a, b) {
    if (a.score < b.score)
    return 1;
    if (a.score > b.score)
    return -1;
    return 0;
  },
  sortArray: function () {
    return this.props.people.sort(this.compareArray);
  },
  render: function () {

    let peopleList = this.sortArray();

    let people = peopleList.map(function (person, i) {
      return /*#__PURE__*/React.createElement(Person, { name: person.name, score: person.score, image: person.image });
    });

    return /*#__PURE__*/(
      React.createElement("ul", null,
      people));


  } });


let Person = React.createClass({ displayName: "Person",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("li", { className: "Person" }, /*#__PURE__*/
      React.createElement("div", { className: "Image", style: { backgroundImage: 'url(' + this.props.image + ')' } }), /*#__PURE__*/
      React.createElement("div", { className: "Name" }, this.props.name), /*#__PURE__*/
      React.createElement("div", { className: "Score" }, this.props.score)));


  } });


// Render
ReactDOM.render( /*#__PURE__*/
React.createElement(Leaderboard, null),
document.getElementById('leaderboard'));