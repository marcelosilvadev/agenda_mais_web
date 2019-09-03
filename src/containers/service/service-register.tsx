import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ServiceStore from './store';


interface Props {
  service: ServiceStore
}

@observer
export default class RegisterService extends React.Component<Props>{

  render() {
    return (
      <Container>

      </Container>
    )
  }
}
