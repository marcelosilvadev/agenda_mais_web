import { action, observable } from 'mobx';
import { Agendainterface } from '../../interfaces/agenda.interface';

export default class AgendaStore {

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
  @observable date;
  @observable init: number = 0;
  @observable Agenda: Agendainterface[] = [];

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

  @action handleDate = (date: Date | null) => {
    this.date = date;
  };

  @action initAgenda = () => {

    if (!this.init) {

      let agenda = [
        {
          id: '1',
          hour: '13:00',
          service: 'Corte',
          time: '40 min',
          value: 'R$ 50.00',
          client: 'Marcelo de Andrade Silva',
          phone: '(16)9 9236-2117'
        },
        {
          id: '2',
          hour: '13:40',
          service: 'Plastica',
          time: '60 min',
          value: 'R$ 150.00',
          client: 'Marcelo de Andrade Silva',
          phone: '(16)9 9236-2117'
        },
        {
          id: '3',
          hour: '14:40',
          service: 'Escova',
          time: '20 min',
          value: 'R$ 50.00',
          client: 'Marcelo de Andrade Silva',
          phone: '(16)9 9236-2117'
        }
      ]
      agenda.map(a => {
        this.Agenda.push(a)
      })
      this.init = 1;
    }
  }


}
const agenda = new AgendaStore();
export { agenda };
