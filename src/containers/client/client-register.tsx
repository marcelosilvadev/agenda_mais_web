import * as React from 'react';
import { Container, Segment, Form, Header, Button, Icon, Dropdown, Input, Label, Table, Popup } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ClientStore from './store';
import CPFInput from '../../components/CPF';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDate } from '../../util';
import ZipCodeInput from '../../components/CEP';
import { maskDate } from '../../util/format.util';

interface Props {
  client: ClientStore
}

const statusOptions = [
  { key: '0', value: 'Corte', text: 'Corte' },
  { key: '1', value: 'Escova', text: 'Escova' },
  { key: '2', value: 'Maquiagem', text: 'Maquiagem' },
  { key: '3', value: 'Unha', text: 'Unha' },
]

@observer
export default class RegisterClient extends React.Component<Props>{

  render() {
    const {
      handleChange,
      createNewClient,
      date,
      handleDate,
      Service,      
      addService,
      recordsClient,
      handleBack,
      deleteService,
      editService,
      services
    } = this.props.client;
    return (
      <Container>
        <Header color='pink' as='h2'>
          <Header.Content>
            Cadastro de Clientes
                 <Header.Subheader>Cadastro de informações clientes personalizados.</Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Form id='groupRegisterForm' onSubmit={createNewClient}>
            <Form.Group widths='equal'>
              <Form.Field width='16' required={true}>
                <Form.Input
                  id='recordsClient.name'
                  fluid
                  label='Nome do Cliente'
                  value={recordsClient.name}
                  placeholder='Insira o nome do cliente...'
                  maxLength={45}
                  onChange={handleChange}
                  required />
              </Form.Field>
              <Form.Field width='3' required={true}>
                <label>Data de Nascimento</label>
                <ReactDatePicker
                  id='recordsClient.date'
                  required={true}
                  selected={getDate(date)}
                  onChange={handleDate}
                  value={recordsClient.date === '' ? '' : maskDate(recordsClient.date)}
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
                  id='recordsClient.cpf'
                  required={true}
                  value={recordsClient.cpf}
                  width={16}
                  onChange={handleChange} />
              </Form.Field>
              <Form.Field required={true} >
                <Form.Input
                  id='recordsClient.email'
                  label='email'
                  value={recordsClient.email}
                  placeholder='joe@schmoe.com'
                  required={true}
                  onChange={handleChange} />
              </Form.Field>
              <Form.Field required={true} >
                <Form.Input
                  id='recordsClient.phone'
                  label='Contato'
                  value={recordsClient.phone}
                  placeholder='16 9 9236-2117'
                  required={true}
                  onChange={handleChange} />
              </Form.Field>
            </Form.Group>
            <Segment>
              <Header as='h4' color={'pink'} content='Endereço' />
              <Form.Group widths='equal'>
                <Form.Field
                  width={4}
                  required={true}>
                  <label>CEP:</label>
                  <ZipCodeInput
                    id='recordsClient.address.cep'
                    value={recordsClient.address.cep}
                    placeholder='Ex: 14407-416'
                    onChange={handleChange}
                    required={true}
                  />
                </Form.Field>
                <Form.Field >
                  <Form.Input
                    id='recordsClient.address.rua'
                    fluid
                    label='Rua'
                    value={recordsClient.address.rua}
                    placeholder='Nome da Rua...'
                    onChange={handleChange} />
                </Form.Field>
                <Form.Field width='6'>
                  <Form.Input
                    id='recordsClient.address.numero'
                    fluid
                    maxLength={4}
                    value={recordsClient.address.numero}
                    label='Número'
                    placeholder='Número da Casa...'
                    onChange={handleChange} />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field>
                  <Form.Input
                    id='recordsClient.address.bairro'
                    fluid
                    value={recordsClient.address.bairro}
                    label='Bairro'
                    placeholder='Nome do Bairro...'
                    onChange={handleChange} />
                </Form.Field>
                <Form.Field >
                  <Form.Input
                    id='recordsClient.address.cidade'
                    fluid
                    value={recordsClient.address.cidade}
                    label='Cidade'
                    placeholder='Nome do Cidade...'
                    onChange={handleChange} />
                </Form.Field>
                <Form.Field >
                  <Form.Input
                    id='recordsClient.address.estado'
                    fluid
                    value={recordsClient.address.estado}
                    label='Estado'
                    placeholder='Nome do Estado...'
                    onChange={handleChange} />
                </Form.Field>
              </Form.Group>
            </Segment>
            <Segment>
              <Header as='h4' color={'pink'} content='Serviços' />
              <Form.Group >
                <Form.Field width={16}>
                  <label>Serviços</label>
                  <Dropdown
                    id="services.description"
                    placeholder='Serviços'
                    clearable
                    value={services.description}
                    options={statusOptions}
                    selection
                    onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Valor</label>
                  <Input
                    id='services.value'
                    labelPosition='right'
                    type='text'
                    value={services.value}
                    placeholder='Valor'
                    onChange={handleChange}>
                    <Label basic>R$</Label>
                    <input />
                    <Label>.00</Label>
                  </Input>
                </Form.Field>
                <Form.Field >
                  <label>Tempo</label>
                  <Input
                    id='services.time'
                    labelPosition='right'
                    type='text'
                    value={services.time}
                    placeholder='Tempo'
                    onChange={handleChange}>
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
                    onClick={addService}
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
                          <Table.Cell >R${e.value}</Table.Cell>
                          <Table.Cell >{e.time} min</Table.Cell>
                          <Table.Cell singleLine width={1} textAlign='center'>
                            <Popup content='Editar Serviço' trigger={
                              <Icon
                                size='large'
                                name='edit'
                                link
                                color='blue'
                                onClick={() => editService(e.description)}
                              />
                            }
                            />
                            <Popup content='Excluir Serviço' trigger={
                              <Icon
                                size='large'
                                name='delete'
                                link
                                color='red'
                                onClick={() => deleteService(e.description)}
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
