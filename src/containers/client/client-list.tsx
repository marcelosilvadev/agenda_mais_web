import * as React from 'react';
import { Container, Segment, Table, Icon, Pagination, Label, Dropdown, Popup, Form, Button, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ClientStore from './store';
import { formatPhone } from '../../util/format.util';


interface Props {
  client: ClientStore
}

@observer
export default class ListClient extends React.Component<Props>{
  componentDidMount() {
    const { initClient } = this.props.client;
    initClient();
  }

  render() {
    const {
      Clients,
      handleChange,
      handleActiveScreen,
      viewClient,
      deleteClient
    } = this.props.client;

    const limits = [10, 30, 50].map((limit: number) => {
      return {
        text: limit,
        value: limit
      };
    });

    return (
      <Container>
        <Header color='pink' as='h2'>
          <Header.Content>
            Clientes
                 <Header.Subheader>Lista de clientes cadastrados.</Header.Subheader>
          </Header.Content>
        </Header>
        {/* Filter Header */}
        <Segment>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='name'
                label='Nome do Cliente'
                placeholder='Filtre por nome do cliente...'
                maxLength={45}
                onChange={handleChange}
              />
              <Popup content='Pesquisar Clientes' trigger={
                <Form.Field width={2} className='no-label' >
                  <Button
                    title='Pesquisar'
                    content='Pesquisar'
                    icon='search'
                    size='small'
                    labelPosition='left'
                    onClick={() => console.log("")}
                    primary={true}
                  />
                </Form.Field>
              }
              />
              <Popup content='Novo Cliente' trigger={
                <Form.Field width={2} className='no-label'>
                  <Button
                    title='Novo'
                    type='button'
                    content='Novo'
                    icon='plus'
                    labelPosition='left'
                    size='small'
                    onClick={handleActiveScreen}
                    color='green'
                  />
                </Form.Field>
              }
              />
            </Form.Group>
          </Form>

          {/* Table Header */}
          <Table celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell >Nome</Table.HeaderCell>
                <Table.HeaderCell width={'2'} >Telefone</Table.HeaderCell>
                <Table.HeaderCell width={'1'} textAlign='center'>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {/* Table Body */}
            <Table.Body>
              {
                Clients.map((e, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell singleLine >{e.name}</Table.Cell>
                      <Table.Cell >{formatPhone(e.phone)}</Table.Cell>
                      <Table.Cell width={1} textAlign='center'>
                        <Popup content='Visualizar Cliente' trigger={
                          <Icon
                            size='large'
                            name='eye'
                            link
                            color='blue'
                            onClick={() => viewClient(e.id)}
                          />
                        }
                        />
                        <Popup content='Excluir cliente' trigger={
                          <Icon
                            size='large'
                            name='trash'
                            link
                            color='red'
                            onClick={() => deleteClient(e.id)}
                          />
                        }
                        />
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>

            {/* Pagination */}
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3' width={12}>
                  <Dropdown
                    className='pagination-counter'
                    scrolling={true}
                    onChange={() => console.log("")}
                    options={limits}
                    defaultValue={10}
                    selection
                  />
                  <Label size='small'>{Clients.length} de 10 registros</Label>

                  <Pagination floated={'right'}
                    boundaryRange={1}
                    siblingRange={1}
                    defaultActivePage={1}
                    totalPages={10}
                    onPageChange={() => console.log("")}
                    nextItem={{
                      'aria-label': 'Próximo item',
                      content: <Icon size='small' name='angle double right' link color='black' />,
                    }}
                    prevItem={{
                      'aria-label': 'Item Anterior',
                      content: <Icon size='small' name='angle double left' link color='black' />,
                    }}
                    firstItem={null}
                    lastItem={null}
                    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                  />

                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Segment>
      </Container>
    )
  }
}
