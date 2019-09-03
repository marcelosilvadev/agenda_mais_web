import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import ClientStore from './store'
import RegisterClient from './client-register';
import ListClient from './client-list';

interface Props {
  client: ClientStore
}

@inject('client')
@observer
export default class Client extends React.Component<Props>{
  render() {
    const { showActiveScreen } = this.props.client;
    return (
      <Container>
        {
          showActiveScreen ?
            <ListClient {...this.props} />
            :
            <RegisterClient {...this.props} />
        }
      </Container>
    )
  }
}
