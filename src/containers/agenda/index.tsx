import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import AgendaStore from './store'

import ListAgenda from './agenda-list';
import RegisterAgenda from './agenda-register';

interface Props {
  agenda: AgendaStore
}

@inject('agenda')
@observer
export default class Client extends React.Component<Props>{
  render() {
    const { showActiveScreen } = this.props.agenda;
    return (
      <Container>
        {
          showActiveScreen ?
            <ListAgenda {...this.props} />
            :
            <RegisterAgenda {...this.props}/>
        }
      </Container>
    )
  }
}
