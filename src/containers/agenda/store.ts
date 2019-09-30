import { action, observable } from 'mobx';
import { Agendainterface } from '../../interfaces/agenda.interface';
import { dateNow } from '../../util/format.util';
import { success } from '../../components/notifications';

export default class AgendaStore {

  @observable records: {
    codigo: number
    data: string
    nome: string
    hora: string
    telefone: string
    servico: string
    tempo: string
    valor: string
  } = {
      codigo: 0,
      data: '',
      nome: '',
      hora: '',
      telefone: '',
      servico: '',
      tempo: '',
      valor: ''
    };

  @observable showActiveScreen: boolean = true;
  @observable showActiveModal: boolean = false;
  @observable date = dateNow();
  @observable init: number = 0;
  @observable Agenda: Agendainterface[] = [];
  @observable idAgenda: string = '';

  @action reset = () => {
    this.records = {
      codigo: 0,
      data: '',
      nome: '',
      hora: '',
      telefone: '',
      servico: '',
      tempo: '',
      valor: ''
    };
    this.showActiveScreen = true;
    this.idAgenda = '';
  }

  @action handleBack = () => {
    this.handleActiveScreen();
    this.reset();
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

  @action handleModal = (id: string) => {
    this.idAgenda = id;
    this.showActiveModal = !this.showActiveModal;
  }

  @action deleteAgenda = () => {
    if (this.idAgenda !== '') {
      this.Agenda = this.Agenda.filter(s => s.id !== this.idAgenda);
      this.idAgenda = '';
      this.handleModal('');
      success("Agendamento deletado com sucesso !")
    }

  }

  @action search = () => {
    this.Agenda = [];
    let agenda = [
      {
        id: '1',
        hour: '08:00',
        service: 'Barba',
        time: '20 min',
        value: 'R$ 25.00',
        client: 'Douglas de Souza',
        phone: '(16)9 9134-2778'
      },
      {
        id: '2',
        hour: '10:40',
        service: 'Penteado',
        time: '60 min',
        value: 'R$ 150.00',
        client: 'Karina Silva',
        phone: '(16)9 9992-4566'
      },
      {
        id: '3',
        hour: '12:00',
        service: 'Chapinha',
        time: '20 min',
        value: 'R$ 50.00',
        client: 'Ana Laura Tassoni da Silva',
        phone: '(16)9 9239-7604'
      }
    ]
    agenda.map(a => {
      this.Agenda.push(a)
    })
  }

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
          client: 'Tatiana Carolina de Andrade Silva',
          phone: '(16)9 9212-3366'
        },
        {
          id: '3',
          hour: '14:40',
          service: 'Escova',
          time: '20 min',
          value: 'R$ 50.00',
          client: 'Ana Laura Tassoni da Silva',
          phone: '(16)9 9239-7604'
        }
      ]
      agenda.map(a => {
        this.Agenda.push(a)
      })
      this.init = 1;
    }
  }
  @action createNewSchedule = () => {
    this.Agenda = [];
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
        client: 'Tatiana Carolina de Andrade Silva',
        phone: '(16)9 9212-3366'
      },
      {
        id: '3',
        hour: '14:40',
        service: 'Escova',
        time: '20 min',
        value: 'R$ 50.00',
        client: 'Ana Laura Tassoni da Silva',
        phone: '(16)9 9239-7604'
      },
      {
        id: '4',
        hour: '17:30',
        service: 'Corte',
        time: '25 min',
        value: 'R$ 30.00',
        client: 'Jean Carlo Alves Ferreira',
        phone: '(16)9 9939-6677'
      }
    ]
    agenda.map(a => {
      this.Agenda.push(a)
    })
    success("Agendamento criado com sucesso");
    this.handleActiveScreen()
  }
  

}
const agenda = new AgendaStore();
export { agenda };
