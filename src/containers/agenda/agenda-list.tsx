import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import AgendaStore from './store';


interface Props {
    agenda: AgendaStore
}

@observer
export default class ListAgenda extends React.Component<Props>{

  render() {    
    return (
      <Container>
        
      </Container>
    )
  }
}
