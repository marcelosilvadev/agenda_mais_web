import * as React from 'react';
import { Container, Segment, Form, Header, Button, Icon, Dropdown, Input, Label, Table, Popup } from 'semantic-ui-react';
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

const statusOptions = [
  { key: '0', value: 0, text: 'Corte' },
  { key: '1', value: 1, text: 'Escova' },
  { key: '2', value: 2, text: 'Maquiagem' },
  { key: '3', value: 3, text: 'Unha' },
]

@observer
export default class RegisterClient extends React.Component<Props>{

  render() {
    const { date, handleDate, zipcode, handleZipcode, Service, handleActiveScreen } = this.props.client;
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
            <Segment>
              <Header as='h4' color={'blue'} content='Serviços' />
              <Form.Group >
                <Form.Field width={16}>
                  <label>Serviços</label>
                  <Dropdown
                    id="servicos"
                    placeholder='Serviços'
                    clearable
                    options={statusOptions}
                    selection />
                </Form.Field>
                <Form.Field>
                  <label>Valor</label>
                  <Input
                    labelPosition='right'
                    type='text'
                    placeholder='Valor'>
                    <Label basic>R$</Label>
                    <input />
                    <Label>.00</Label>
                  </Input>
                </Form.Field>
                <Form.Field >
                  <label>Tempo</label>
                  <Input
                    labelPosition='right'
                    type='text'
                    placeholder='Tempo'>
                    <input />
                    <Label>min</Label>
                  </Input>
                </Form.Field>
                <Form.Field className='no-label'>
                  <Icon
                    link
                    circular
                    inverted
                    color='green'
                    name='add'
                    onClick={() => console.log('')}
                  />
                </Form.Field>
              </Form.Group>
              <Table celled >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell >Serviço</Table.HeaderCell>
                    <Table.HeaderCell >Valor</Table.HeaderCell>
                    <Table.HeaderCell >Tempo</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    Service.map((e, index) => {
                      return (
                        <Table.Row key={index}>
                          <Table.Cell >{e.description}</Table.Cell>
                          <Table.Cell >{e.value}</Table.Cell>
                          <Table.Cell >{e.time}</Table.Cell>
                          <Table.Cell width={1} textAlign='center'>
                            <Popup content='Editar Serviço' trigger={
                              <Icon
                                size='large'
                                name='edit'
                                link
                                color='blue'
                                onClick={() => console.log('')}
                              />
                            }
                            />
                            <Popup content='Excluir Serviço' trigger={
                              <Icon
                                size='large'
                                name='delete'
                                link
                                color='red'
                                onClick={() => console.log('')}
                              />
                            }
                            />
                          </Table.Cell>
                        </Table.Row>
                      )
                    })
                  }
                </Table.Body>
              </Table>
            </Segment>


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
