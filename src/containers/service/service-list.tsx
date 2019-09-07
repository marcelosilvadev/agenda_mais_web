import * as React from 'react';
import { Container, Table, Segment, Icon, Pagination, Label, Dropdown, Popup, Form, Button, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ServiceStore from './store';


interface Props {
    service: ServiceStore
}

@observer
export default class ListService extends React.Component<Props>{
  componentDidMount(){
    const{ initService } = this.props.service;
    initService();
  }
  render() {    
    const {
      Services,
      handleChange,
      handleActiveScreen,
      viewService,
      deleteService
    } = this.props.service;

    const limits = [10, 30, 50].map((limit: number) => {
      return {
        text: limit,
        value: limit
      };
    });
    return (
      <Container>
      <Header color='blue' as='h2'>
        <Header.Content>
          Serviços
               <Header.Subheader>Lista de serviços cadastrados.</Header.Subheader>
        </Header.Content>
      </Header>
      {/* Filter Header */}
      <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              id='name'
              label='Descrição do Serviço'
              placeholder='Filtre pela descrição do serviço...'
              maxLength={45}
              onChange={handleChange}
            />
            <Popup content='Pesquisar Serviços' trigger={
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
            <Popup content='Novo Serviço' trigger={
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
              <Table.HeaderCell >Descrição</Table.HeaderCell>
              <Table.HeaderCell width={'1'} >Valor $</Table.HeaderCell>
              <Table.HeaderCell width={'1'} >Tempo</Table.HeaderCell>
              <Table.HeaderCell width={'1'} textAlign='center'>Ações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {/* Table Body */}
          <Table.Body>
            {
              Services.map((e, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell singleLine >{e.description}</Table.Cell>
                    <Table.Cell >R${e.value}.00</Table.Cell>
                    <Table.Cell >{e.time} min</Table.Cell>
                    <Table.Cell width={1} textAlign='center'>
                      <Popup content='Visualizar serviço' trigger={
                        <Icon
                          size='large'
                          name='eye'
                          link
                          color='blue'
                          onClick={() => viewService(e.id)}
                        />
                      }
                      />
                      <Popup content='Excluir serviço' trigger={
                        <Icon
                          size='large'
                          name='trash'
                          link
                          color='red'
                          onClick={() => deleteService(e.id)}
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
              <Table.HeaderCell colSpan='4' width={12}>
                <Dropdown
                  className='pagination-counter'
                  scrolling={true}
                  onChange={() => console.log("")}
                  options={limits}
                  defaultValue={10}
                  selection
                />
                <Label size='small'> {Services.length} de 10 registros</Label>

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
