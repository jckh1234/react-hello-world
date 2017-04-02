import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import counterStore from './store';
import constants from './constants'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class CounterApp extends Component {

 constructor(props){
   super(props);
   this.state = {
     modelOpen: this.props.modelOpen
   }
 }

  Increase() {
    this.props.onIncrease()
    this.setState({modelOpen:true});
  }
  Decrease(){

    this.props.onDecrease();
  }
  handleClose (){
   console.log('handelClose');
   this.setState({modelOpen: false});
  }
  render()  {
      const style = {width:500,height:300};
    return (
      <div>
        <h1>Counter: {this.props.count}</h1>
        <button onClick={this.Increase.bind(this)}>Increase</button>
        <button onClick={this.Decrease.bind(this)}>Decrease</button>
        <Modal size='small' open={this.state.modelOpen} closeOnDimmerClick onClose={this.handleClose.bind(this)} style={style}>
          <Header icon='archive' content='Archive Old Messages' />
          <Modal.Content>
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted>
              <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
CounterApp.PropTypes = {
  count: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  modelOpen: PropTypes.boolean
};

class AppContainer extends Component {
  constructor(...args){
    super(...args);
    counterStore.dispatch({type: constants.INIT})
    this.state = {
      count: counterStore.getState().count
    }
  }
  componentDidMount() {
    this.unsubscribe = counterStore.subscribe(()=>
      this.setState({count: counterStore.getState().count}));
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return(
      <CounterApp
        count={counterStore.getState().count}
        onIncrease={()=>counterStore.dispatch({type:constants.INCREASE})}
        onDecrease={()=>counterStore.dispatch({type:constants.DECREASE})}
        modelOpen={true}
        />
    )
  }

}
render(<AppContainer />, document.getElementById('app'));
