import * as React from 'react';
import { Container, Header, Segment, Form, Popup, Button, Table, Icon, Modal } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import AgendaStore from './store';
import ReactDatePicker from "react-datepicker";
import { getDate } from '../../util';

interface Props {
  agenda: AgendaStore
}

@observer
export default class ListAgenda extends React.Component<Props>{
  componentDidMount() {
    const { initAgenda } = this.props.agenda;
    initAgenda();
  }  

  close = () => this.setState({ open: false })

  render() {
    const { date, handleDate, Agenda, showActiveModal, deleteAgenda, handleModal, search } = this.props.agenda;
    return (
      <Container>
        <Header color='blue' as='h2'>
          <Header.Content>
            Agenda
                 <Header.Subheader>Agenda de serviços agendados.</Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Form>
            <Form.Group>
              <Form.Field width='3' required={true}>
                <label>Data</label>
                <ReactDatePicker
                  required={true}
                  selected={getDate(date)}
                  onChange={handleDate}
                  isClearable
                  dateFormat='dd/MM/yyyy'
                  placeholderText="01/01/2019"
                />
              </Form.Field>
              <Popup content='Pesquisar agendamentos' trigger={
                <Form.Field width={2} className='no-label' >
                  <Button
                    title='Pesquisar'
                    content='Pesquisar'
                    icon='search'
                    size='small'
                    labelPosition='left'
                    onClick={() => search()}
                    primary={true}
                  />
                </Form.Field>
              }
              />
            </Form.Group>
          </Form>
          <Table celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell >Horario</Table.HeaderCell>
                <Table.HeaderCell >Serviço</Table.HeaderCell>
                <Table.HeaderCell >Tempo</Table.HeaderCell>
                <Table.HeaderCell >Valor</Table.HeaderCell>
                <Table.HeaderCell singleLine>Cliente</Table.HeaderCell>
                <Table.HeaderCell singleLine>Telefone</Table.HeaderCell>
                <Table.HeaderCell width={'1'} textAlign='center'>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {/* Table Body */}
            <Table.Body>
              {
                Agenda.map((e, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell singleLine >{e.hour}</Table.Cell>
                      <Table.Cell >{e.service}</Table.Cell>
                      <Table.Cell >{e.time}</Table.Cell>
                      <Table.Cell >{e.value}</Table.Cell>
                      <Table.Cell >{e.client}</Table.Cell>
                      <Table.Cell >{e.phone}</Table.Cell>
                      <Table.Cell width={1} textAlign='center'>
                        <Popup content='Cancelar agendamento' trigger={
                          <Icon
                            size='large'
                            name='dont'
                            link
                            color='red'
                            onClick={()=>handleModal(e.id)}
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
        <Modal
          open={showActiveModal}          
          onClose={() => handleModal('')}
        >
          <Modal.Header>Atenção!</Modal.Header>
          <Modal.Content>
            <p>Certeza que deseja cancelar este agendamento?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => handleModal('')} negative>
              Não
            </Button>
            <Button
              onClick={() => deleteAgenda()}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Sim'
            />
          </Modal.Actions>
        </Modal>
      </Container>
    )
  }
}
