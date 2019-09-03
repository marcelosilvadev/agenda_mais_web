import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ClientStore from './store';


interface Props {
    client: ClientStore
}

@observer
export default class RegisterClient extends React.Component<Props>{

  render() {    
    return (
      <Container>
        
      </Container>
    )
  }
}
