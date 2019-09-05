import * as React from 'react';
import { Container, Header, Segment, Form, Label, Input, Icon, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ServiceStore from './store';


interface Props {
  service: ServiceStore
}

@observer
export default class RegisterService extends React.Component<Props>{

  render() {
    const { handleActiveScreen } = this.props.service;
    return (
      <Container>
        <Header color='blue' as='h2'>
          <Header.Content>
            Cadastro de Serviços
                 <Header.Subheader>Cadastro de serviços detalhados.</Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Form id='groupRegisterForm' onSubmit={() => console.log('')}>
            <Form.Group widths='equal'>
              <Form.Field >
                <Form.Input
                  id='description'
                  fluid
                  label='Descrição'
                  placeholder='Descrição...'
                  onChange={() => console.log('')} />
              </Form.Field>
              <Form.Field>
                <label>Valor Padrão</label>
                <Input
                  labelPosition='right'
                  type='text'
                  placeholder='Valor padrão'>
                  <Label basic>R$</Label>
                  <input />
                  <Label>.00</Label>
                </Input>
              </Form.Field>
              <Form.Field >
                <label>Tempo Padrão</label>
                <Input
                  labelPosition='right'
                  type='text'
                  placeholder='Tempo padrão'>
                  <input />
                  <Label>min</Label>
                </Input>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
                <Button
                  floated='left'
                  icon
                  labelPosition='left'
                  color='grey'
                  size='small'
                  onClick={handleActiveScreen}>
                  <Icon name='arrow left' />
                  Voltar
                </Button>
              </Form.Field>
              <Form.Field>
                <Button
                  form='groupRegisterForm'
                  type='submit'
                  floated='right'
                  icon
                  labelPosition='left'
                  color='green'
                  size='small'>
                  <Icon name='save' />
                  Salvar
                  </Button>
              </Form.Field>

            </Form.Group>
          </Form>
        </Segment>
      </Container>
    )
  }
}
