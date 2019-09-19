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
    const { 
      handleBack,
      handleChange,
      addNewService,
      recordsService
     } = this.props.service;
    return (
      <Container>
        <Header color='pink' as='h2'>
          <Header.Content>
            Cadastro de Serviços
                 <Header.Subheader>Cadastro de serviços detalhados.</Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Form id='groupRegisterForm' onSubmit={addNewService}>
            <Form.Group widths='equal'>
              <Form.Field >
                <Form.Input
                  id='recordsService.description'
                  fluid
                  label='Descrição'
                  value={recordsService.description}
                  placeholder='Descrição...'
                  onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Valor Padrão</label>
                <Input
                  id='recordsService.value'
                  labelPosition='right'
                  type='text'
                  value={recordsService.value}
                  onChange={handleChange}
                  placeholder='Valor padrão'>
                  <Label basic>R$</Label>
                  <input />
                  <Label>.00</Label>
                </Input>
              </Form.Field>
              <Form.Field >
                <label>Tempo Padrão</label>
                <Input
                  id='recordsService.time'
                  labelPosition='right'
                  type='text'
                  value={recordsService.time}
                  onChange={handleChange}
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
                  onClick={handleBack}>
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
