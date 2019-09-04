import { action, observable } from 'mobx';
import { ServiceInterface } from '../../interfaces/service.interface';

export default class ServiceStore {

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
    @observable Services: ServiceInterface[] = [];

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
}
const service = new ServiceStore();
export { service };
