import React, { PropTypes } from 'react'
import {render} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import css from './ContactList.css'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class ContactList extends React.Component {
  constructor(){
    super(...arguments);
    this.state={
      items: [
        {id:1, name:'Jason'},
        {id:2, name:'Eric'},
        {id:3, name:'Peter'}
      ]
    }
  }
  handleChange(evt) {
    if(evt.key === 'Enter'){
    // Create a new item and set the current time as it's id
    let newItem = {id:Date.now(), name:evt.target.value}
    // Create a new array with the previous items plus the value the user typed
    let newItems = this.state.items.concat(newItem);
    // Clear the text field
    evt.target.value='';
    // Set the new state
    this.setState({items: newItems});
    }
  }
  render () {
    let something = (
      <div>Something</div>

    )
    let contactItems = this.state.items.map((item,i) =>(
      <TableRow key={item.id} className='tableItem'>
        <TableRowColumn>{item.id}</TableRowColumn>
        <TableRowColumn>{item.name}</TableRowColumn>
      </TableRow>
    ));

    return(
      <div>
        <MuiThemeProvider>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>

                {contactItems}

            </TableBody>
          </Table>

        </MuiThemeProvider>
        <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default ContactList
