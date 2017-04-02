import React, { PropTypes } from 'react'
import {render} from 'react-dom'
import {CommandBar} from 'office-ui-fabic-react/lib/components/CommandBar'

export class TopCommandBar extends React.Component<any, any>{
  constructor(props:any){
    super(props);
    this.state = {
      menu: [
        {

        }
      ]
    }
  }
  public render(){
    return(
      <CommandBar
        isSearchBoxVisible=true
        items={
          [
            {
              key: 'newItem',
              icon: 'Add',
              name: 'New'
            },
            {
              key: 'upload',
              icon: 'upload',
              name: 'Upload'
            }
          ]
        }
      />

  );

  }
}
