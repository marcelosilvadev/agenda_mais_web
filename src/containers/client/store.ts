import { action, observable } from 'mobx';
import { ClientInterface } from '../../interfaces/client.interface';
import { ServiceInterface } from '../../interfaces/service.interface';

export default class ClientStore {

  @observable records: {
    codigo: number
    name: string
    status: number
    allow_update: boolean
  } = {
      codigo: 0,
      name: '',
      status: 1,
      allow_update: true
    };

  @observable showActiveScreen: boolean = true;
  @observable Clients: ClientInterface[] = [];
  @observable date;
  @observable zipcode: string = "";
  @observable Service: ServiceInterface[] = [];

  @action reset = () => {
    this.records = {
      codigo: 0,
      name: '',
      status: 1,
      allow_update: true
    };
    this.showActiveScreen = true;
  }

  @action handleChange = (event: any, select?: any) => {
    const { id, value } = select || event.target;
    this.records[id] = value;
  };

  @action handleActiveScreen = () => {
    this.showActiveScreen = !this.showActiveScreen;
  }

  @action handleDate = (date: Date | null) => {
    this.date = date;
  };

  @action handleZipcode = async (event: any) => {
    const { value } = event.target;

    if (value === '' || value.length !== 8) {
      return;
    }
  }

}
const client = new ClientStore();
export { client };
