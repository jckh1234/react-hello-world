import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'office-ui-fabric-react/lib/components/Button'
class App extends Component {
  constructor(){
    super();
    this.state = {searchTerm: "React"};
  }

  handleChange(event){
    this.setState({searchTerm: event.target.value.toUpperCase()});

  }
  render () {
    //return <div>Search Term: <input type="search"
    //value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/></div>;
    return(
            <div><Button>I am a button.</Button></div>

    )



  }
}

render(<App/>, document.getElementById('app'));
