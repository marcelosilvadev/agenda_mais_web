import { action, observable } from 'mobx';

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
    
    

}
const client = new ClientStore();
export { client };
