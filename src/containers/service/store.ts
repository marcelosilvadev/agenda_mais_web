import { action, observable } from 'mobx';
import { ServiceInterface } from '../../interfaces/service.interface';
import { assign } from '../../util';

export default class ServiceStore {

  @observable records: {
    codigo: number
    name: string
    status: number
  } = {
      codigo: 0,
      name: '',
      status: 1,
    };

  @observable recordsService: {
    code: string
    description: string
    value: string
    time: string
    status_id: number
  } = {
      code: '',
      description: '',
      value: '',
      time: '',
      status_id: 1
    }

  @observable showActiveScreen: boolean = true;
  @observable init: number = 0;
  @observable Services: ServiceInterface[] = [];
  @observable ServicesView: ServiceInterface[] = [];

  @action reset = () => {
    this.records = {
      codigo: 0,
      name: '',
      status: 1,
    };
    this.recordsService = {
      code: '',
      description: '',
      value: '',
      time: '',
      status_id: 1
    }
    this.showActiveScreen = true;
  }


  @action handleBack = () => {
    this.handleActiveScreen();
    this.reset();
  }

  @action handleChange = (event: any, select?: any) => {
    const { id, value } = select || event.target;
    assign(this, id, value);
  };

  @action handleActiveScreen = () => {
    this.showActiveScreen = !this.showActiveScreen;
  }

  @action addNewService = () => {
    // console.log(JSON.parse(JSON.stringify(this.recordsService)));

    let count = this.Services.length + 1;
    this.Services.push({
      id: count.toString(),
      description: this.recordsService.description,
      value: this.recordsService.value,
      time: this.recordsService.time,
      status_id: 1
    })
    this.handleActiveScreen();
    this.reset();
  }

  @action viewService = (id: string) => {    
    this.ServicesView = this.Services.filter(c => c.id === id)

    this.recordsService = {
      code: this.ServicesView[0].id,
      description: this.ServicesView[0].description,
      value: this.ServicesView[0].value,
      time: this.ServicesView[0].time,
      status_id: 1
    }
    // console.log(JSON.parse(JSON.stringify(client)))
    this.handleActiveScreen();
  }

  @action initService = () => {

    if (!this.init) {

      let services = [
        {
          id: '1',
          description: 'Corte',
          value: '30',
          time: '40',
          status_id: 1
        },
        {
          id: '2',
          description: 'Escova',
          value: '60',
          time: '50',
          status_id: 1
        },
        {
          id: '3',
          description: 'Maquiagem',
          value: '80',
          time: '80',
          status_id: 1
        }
      ]
      services.map(s => {
        this.Services.push(s)
      })
      this.init = 1;
    }
  }
  @action deleteService = (id: string) => {
    this.Services = this.Services.filter(s => s.id !== id);
  }
}
const service = new ServiceStore();
export { service };
