import * as React from 'react';
import { Container, Header, Segment, Form, Button, Dropdown, Icon } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import AgendaStore from './store';
import ReactDatePicker from "react-datepicker";
import { getDate } from '../../util';

interface Props {
  agenda: AgendaStore
}

@observer
export default class RegisterAgenda extends React.Component<Props>{


  close = () => this.setState({ open: false })



  render() {
    const clientOptions = [
      { key: '0', value: 'Marcelo de Andrade Silva', text: 'Marcelo de Andrade Silva' },
      { key: '1', value: 'Jean Carlo Alves Ferreira', text: 'Jean Carlo Alves Ferreira' },
      { key: '2', value: 'Ana Laura Tassoni da Silva', text: 'Ana Laura Tassoni da Silva' },
    ]
    const statusOptions = [
      { key: '0', value: 'Corte', text: 'Corte' },
      { key: '1', value: 'Escova', text: 'Escova' },
      { key: '2', value: 'Maquiagem', text: 'Maquiagem' },
      { key: '3', value: 'Unha', text: 'Unha' },
    ]

    const { date, handleDate, handleChange, records, handleBack, createNewSchedule } = this.props.agenda;
    return (
      <Container>
        <Header color='pink' as='h2'>
          <Header.Content>
            Agenda
                 <Header.Subheader>Cadastramento de novos agendamentos.</Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Form id='groupRegisterForm' onSubmit={createNewSchedule}>
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
              <Form.Field>
                <label>Serviços</label>
                <Dropdown
                  id="servico"
                  placeholder='Serviços'
                  clearable
                  value={records.servico}
                  options={statusOptions}
                  selection
                  onChange={handleChange} />
              </Form.Field>
              <Form.Field width='2' required={true}>
                <Form.Input
                  id='hora'
                  fluid
                  label='Hora'
                  value={records.hora}
                  placeholder='Insira a hora...'
                  maxLength={45}
                  onChange={handleChange}
                  required />
              </Form.Field>

              <Form.Field width='5' required={true}>
                <label>Cliente</label>
                <Dropdown
                  id="nome"
                  placeholder='Cliente'
                  clearable
                  search
                  value={records.nome}
                  options={clientOptions}
                  selection
                  onChange={handleChange} />
              </Form.Field>

              <Form.Field width='4' required={true}>
                <Form.Input
                  id='telefone'
                  fluid
                  label='Telefone'
                  value={records.telefone}
                  placeholder='Insira o telefone do cliente...'
                  maxLength={45}
                  onChange={handleChange}
                  required />
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
