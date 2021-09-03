//import logo from './logo.svg'; // not used anymore, giving a warning
import './App.css';
import { Component } from 'react'; // was added automatically

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
      super();
      // array of objects
      /*
      this.state = {
        monsters: [
          {
            name: 'Frankenstein',
            id: 'monster1'
          },
          {
            name: 'Dracula',
            id: 'monster2'
          },
          {
            name: 'Zombie',
            id: 'monster3'
          }
        ]
      };*/

      // without hard coding users
      this.state = {
        monsters: [],
        searchField: ''
      };

      //this.handleChange = this.handleChange.bind(this);
  }

  // Lifecycle methods:
  // when this component mounts
  // it is when React puts our components on the page & renders it to the DOM for the 1st time
  // when it does that, it runs whatever code found inside componentDidMount
  componentDidMount() {
    // make API request to a url (fetching)
    /*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users));*/

    // .then: promises
    // previously, they used to use call back functions to throw errors or to proceed
    // nested callbacks --> callback hell (since it's difficult to read and debug)
    // they were asynchronous functions: we don't know when they'll complete
    // each function depends on the result or return of the previous one

    // promise: promise that this object will have a result value: resolved or rejected value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    // resolve: when API call is successful
    // rejected: when API call returns an error
    // .then: gets the resolved value
    // .catch: returns the error or rejected value

    // response is a random name, we can name another, same for users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  // the reason why we need a unique key is because React needs to know which
  // element it needs to update if one of the elements in the array has a value that changes
  // so that it does not re-render everything
  // React is smart
  // https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react

  // when to use the key attribute:
  // Anytime you use the map() function inside of render, 
  // or you have a list of the same jsx elements one after another, 
  // they need a key attribute (and CRA will warn you about it if you miss it)

  // map(): explained in Arrays.js

  // <h1 key = {monster.id}> {monster.username} </h1>
  // we can get any key-value pair we want from the json in the link

  // monster is a random name, we can choose another

  // <CardList age="22"/>
  // moving on to children props for a better experience

  /* 
  <CardList>
    <h2>Mahmoud</h2>
  </CardList>
  */

  /* 
  <CardList monsterz={this.state.monsters}>
          {
            this.state.monsters.map(monster => 
                <h1 key = {monster.id}> {monster.name} </h1>
            )
          }
          </CardList>
  */

  // now the CardList component is responsible for generating our monsters cards,
  // and not our App component

  // e in onChange represents the synthetic event
  // a native event that the browser uses to do all kinds of different things

  // <input type='search' placeholder="Search monsters" onChange={e => console.log(e)} />
  // <input type='search' placeholder="Search monsters" onChange={e => console.log(e.target)} />
  // <input type='search' placeholder="Search monsters" onChange={e => console.log(e.target.value  )} />
  
  // normally if we want to check if the state is updated, we console log after the line
  // which updates the state, but, the searchField key in our case is 1 letter behind
  // if you type 'a', the search field shows empty string (searchField not updated), 
  // if we type another 'a' it shows only 1 'a'
  // this is because setState is an asynchronous function call
  // synchronous: is an action that we expect that will happen almost immediately
  // and js knows the amount of time this action or function will take,
  // so js will wait for that thing to finish before it continues running the rest of the code
  // asynchronous: is an action or event is something that take an indefinite amount of time
  // that js doesn't know; so it runs the rest of the code first, and when the async event
  //  finishes, it then runs this finished event

  /* <input type='search' placeholder="Search monsters" onChange={e => {
            this.setState({searchField: e.target.value});
            console.log(this.state);
            }} 
          /> 
  */
  // instead, we can use a callback function as a property in setState, which will happen
  // after setState is finished (after updating the state)

  /* 
  <input type='search' placeholder="Search monsters" onChange={e =>
                this.setState(
                  {searchField: e.target.value}, () => console.log(this.state)
                )
            } 
          />
  */

    /*
    // written as a class method instead of arrow function for reusability purpose
    handleChange(e) {
      // this in this case will give error upon search since the context of this
      // in this case is this method itself and not the App class, so we use binding to solve
      // the problem
      this.setState({searchField: e.target.value});
    }*/
    handleChange = e => {
      this.setState({searchField: e.target.value});
    };
 // onChange event here is JSX (synthetic event) != onchange in a regular html element
 // the 1st updates the state, updates the virtual DOM, then the main DOM is updated
 // accordingly, the 2nd updates the main DOM directly!
 // Synthetic event: a fake event that we pretend that it's a DOM event, but it's
 // something that our React robot is telling us
 
  render() {
    // destructuring: pull properties out of an object and set them to constants
    // it is the equivalent to
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    // we defined 2 new arrays to avoid overwriting on the main one
    // React re-renders the component everytime a change happens in the searchField
    // In react, no need to hide or show cards explicitly (as we were used to do traditionally)
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(aMonster =>
        aMonster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder = 'search monsters'
            handleChange = {this.handleChange}
          />
          <CardList monsterz={filteredMonsters}></CardList>
        </div>
      );
      // <CardList monsterz={this.state.monsters}></CardList>
      // handleChange = {e => this.setState({searchField: e.target.value})}
  }

}

export default App;
