import * as React from 'react';
import { Container, Segment, Form, Header, Button, Icon } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ClientStore from './store';
import CPFInput from '../../components/CPF';
import ReactDatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import { getDate } from '../../util';
import ZipCodeInput from '../../components/CEP';


interface Props {
  client: ClientStore
}

@observer
export default class RegisterClient extends React.Component<Props>{

  render() {
    const { date, handleDate, zipcode, handleZipcode } = this.props.client;
    return (
      <Container>
        <Header color='blue' as='h2'>
          <Header.Content>
            Cadastro de Clientes
                 <Header.Subheader>Cadastro de informações clientes personalizados.</Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Form id='groupRegisterForm' onSubmit={() => console.log('')}>
            <Form.Group widths='equal'>
              <Form.Field width='16' required={true}>
                <Form.Input
                  id='name'
                  fluid
                  label='Nome do Cliente'
                  placeholder='Insira o nome do cliente...'
                  maxLength={45}
                  onChange={() => console.log('')}
                  required />
              </Form.Field>
              <Form.Field width='3' required={true}>
                <label>Data de Nascimento</label>
                <ReactDatePicker
                  required={true}
                  selected={getDate(date)}
                  onChange={handleDate}
                  isClearable
                  dateFormat='dd/MM/yyyy'
                  placeholderText="01/01/2019"
                  showYearDropdown
                  showMonthDropdown
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required={true}>
                <CPFInput
                  id='cpf'
                  required={true}
                  width={16}
                  onChange={() => console.log('')} />
              </Form.Field>
              <Form.Field required={true} >
                <Form.Input
                  label='Email'
                  placeholder='joe@schmoe.com'
                  required={true} />
              </Form.Field>
            </Form.Group>
            <Segment>
              <Header as='h4' color={'blue'} content='Endereço' />
              <Form.Group widths='equal'>
                <Form.Field
                  width={4}
                  required={true}>
                  <label>CEP:</label>
                  <ZipCodeInput
                    id='form.address.zipcode'
                    value={zipcode}
                    placeholder='Ex: 14407-416'
                    onChange={handleZipcode}
                    required={true}
                  />
                </Form.Field>
                <Form.Field >
                  <Form.Input
                    id='rua'
                    fluid
                    label='Rua'
                    placeholder='Nome da Rua...'
                    onChange={() => console.log('')} />
                </Form.Field>
                <Form.Field width='6'>
                  <Form.Input
                    id='numero'
                    fluid
                    maxLength={4}
                    label='Número'
                    placeholder='Número da Casa...'
                    onChange={() => console.log('')} />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field>
                  <Form.Input
                    id='bairro'
                    fluid
                    label='Bairro'
                    placeholder='Nome do Bairro...'
                    onChange={() => console.log('')} />
                </Form.Field>
                <Form.Field >
                  <Form.Input
                    id='cidade'
                    fluid
                    label='Cidade'
                    placeholder='Nome do Cidade...'
                    onChange={() => console.log('')} />
                </Form.Field>
                <Form.Field >
                  <Form.Input
                    id='estado'
                    fluid
                    label='Estado'
                    placeholder='Nome do Estado...'
                    onChange={() => console.log('')} />
                </Form.Field>
              </Form.Group>
            </Segment>
            <Form.Group>
              <Form.Field>
                <Button
                  floated='left'
                  icon
                  labelPosition='left'
                  color='grey'
                  size='small'
                  onClick={() => console.log('')}>
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
