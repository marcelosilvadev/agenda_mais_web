import * as React from 'react';
import MenuStore from './store';
import { Dropdown, Menu } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';

interface Props {
  mainMenu?: MenuStore;
  router?: NewRouterStore;
}

@inject('mainMenu', 'router')
@observer
export default class MainMenu extends React.Component<Props> {

  handleItemClick = (_: any, { name, url }: any) => {

    const { setMenuActive } = this.props.mainMenu!;

    setMenuActive(name);

    const { setHistory } = this.props.router!;

    return setHistory(url);
  };

  logout = () => {

    const { setHistory } = this.props.router!;

    return setHistory('home');

  }

  render() {

    const { activated } = this.props.mainMenu!;

    return (
      <div className={'nav'}>

        <Menu color={'blue'} inverted={true} size='large' secondary={true} stackable={true}>
          <Menu.Item className='logo'>
            AGENDA+
            </Menu.Item>

          <Menu.Item
            id='home-menu'
            name='home'
            active={activated === 'home'}
            url='home'
            onClick={this.handleItemClick}>
            Home
          </Menu.Item>

          <Menu.Item
            id='agenda-menu'
            name='agenda'
            active={activated === 'agenda'}
            url='agenda'
            onClick={this.handleItemClick}>
            Agenda
          </Menu.Item>

          <Menu.Item
            id='client-menu'
            name='client'
            active={activated === 'client'}
            url='client'
            onClick={this.handleItemClick}>
            Clientes
          </Menu.Item>

          <Menu.Item
            id='service-menu'
            name='service'
            active={activated === 'service'}
            url='service'
            onClick={this.handleItemClick}>
            Serviços
          </Menu.Item>

          <Menu.Menu position='right'>
            <Dropdown item={true} text="Tatiana">
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={this.logout}>
                  Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}