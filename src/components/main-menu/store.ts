import { action, observable } from 'mobx';

export default class MainMenuStore {

  @observable activated: string = this.getActiveMenu();
  getActiveMenu() {
    const [, activeMenu] = window.location.pathname.split('/');
    return activeMenu || 'home';
  }

  @action setMenuActive = (name: string) => {
    this.activated = name;
  };

  routes: any[] = [
    {
      title: 'Agenda',
      description: 'Agenda de todos os horários marcados',
      route: 'agenda',
    },
    {
      title: 'Clientes',
      description: 'Buscar e cadastrar novos clientes',
      route: 'client',
    },
    {
      title: 'Serviços',
      description: 'Buscar e cadastrar novos serviços',
      route: 'service',
    },
  ];

}

const mainMenu = new MainMenuStore();
export { mainMenu };