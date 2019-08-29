import { observable } from 'mobx';

export default class HomeStore {
  @observable records: any[] = [];
}
const home = new HomeStore();
export { home };
