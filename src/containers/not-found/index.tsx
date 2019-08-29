import * as React from 'react';
import { Container, Header, Grid, Message, Button } from 'semantic-ui-react';

interface Props {
  history: any;
}

export default class NotFound extends React.Component<Props> {

  handleBack = () => {
    this.props.history.goBack();
  }


  render() {
    return (
      <Container>
        <Header as='h1' color='blue'>Oops!</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Message negative={true}>
                <Message.Header>Rota não encontrada</Message.Header>
              </Message>
              <Button.Group floated='right'>
                <Button onClick={this.handleBack} primary={true}>Voltar</Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
