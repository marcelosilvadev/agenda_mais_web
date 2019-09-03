import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import ServiceStore from './store'
import RegisterService from './service-register';
import ListService from './service-list';

interface Props {
  service: ServiceStore
}

@inject('service')
@observer
export default class Service extends React.Component<Props>{
  render() {
    const { showActiveScreen } = this.props.service;
    return (
      <Container>
        {
          showActiveScreen ?
            <ListService {...this.props} />
            :
            <RegisterService {...this.props} />
        }
      </Container>
    )
  }
}
